
        function trial_box_reset(){

            $(".gutter-3").css("height",0);
            $(".gutter-2").css("height",0);

            $(".gutter-r1").css("height",0);
            $(".gutter-r2").css("height",0);

            $(".error").html("");
        }

        function trial_box_align(){

            trial_box_reset();

            var width = $(".trial-toplayer").width();
            var height = $(".trial-toplayer").height();

            $(".trial-toplayer").css("margin-left",-width/2);
            $(".trial-toplayer").css("margin-top",-height/2);

            var temp = $(".trial-toplayer").height() - $(".trial-left").height() - $(".top-gutter").height() - $(".bottom-layer").outerHeight();
            temp = temp/13;

            $(".gutter-3").css("height",temp);
            $(".gutter-2").css("height",temp);

            var temp = $(".trial-toplayer").height() - $(".trial-right").height() - $(".top-gutter").height() - $(".bottom-layer").outerHeight();

            console.log(temp);
            temp = temp/15;

            $(".gutter-r1").css("height",temp);
            $(".gutter-r2").css("height",temp*2);

        }


        function trial_thanks_box_reset(){

            $(".gutter-th-1").css("height",0);
            $(".gutter-th-2").css("height",0);

        }

        function trial_thanks_box_align(){

            trial_thanks_box_reset();

            var width = $(".trial-toplayer-thanks").width();
            var height = $(".trial-toplayer-thanks").height();

            $(".trial-toplayer-thanks").css("margin-left",-width/2);
            $(".trial-toplayer-thanks").css("margin-top",-height/2);

            var temp = $(".trial-toplayer-thanks").height()-$(".trial-thanks-content").height() - 2*$(".gutter-top-thanks").height();
            temp = temp/6;

            $(".gutter-th-1").css("height",temp);
            $(".gutter-th-2").css("height",temp*2);

        }


        $(".free-trial").on('click',function(event){

            event.preventDefault();

            $(".trial-overlayer").css('display','block');
            $(".trial-toplayer").css('display','block');
            $(".trial-overlayer-thanks").css('display','none');
            $(".trial-toplayer-thanks").css('display','none');

            trial_box_align();            
        });

         $(".trial-thanks-close").on('click',function(){

            $(".trial-overlayer").css('display','none');
            $(".trial-toplayer").css('display','none');
            $(".trial-overlayer-thanks").css('display','none');
            $(".trial-toplayer-thanks").css('display','none');

            trial_box_reset();
            trial_thanks_box_reset();            
        });

        
        $("input:radio[name=packages]").on( "click", function() {

            if($("input:radio[name=packages]:checked").val() == 1){
                $(".class").css("display","block");
                $(".age").css("display","block");

            }else if($("input:radio[name=packages]:checked").val() == 2){
                $(".class").css("display","none");
                $(".age").css("display","block");
            }

            $(".error").html("");

        });

        $(".submit").click(function(){

            var name=$("input[name=name]").val();

            if(name==''){
                $(".error").html("Please enter your name");
                return false;
            }



            var phnumber=$("input[name=phnumber]").val();

            if(phnumber==''){
                $(".error").html("Please enter your Phone number");
                return false;
            }else{
                phnumber = phnumber.replace(/[^0-9]/g,'');
                if(phnumber.length != 10){
                    $(".error").html("Please correct your Phone number");
                    return false;
                }
            }


            var email=$("input[name=emailid]").val();

            if(email==''){
                $(".error").html("Please enter your email address");
                return false;
            }else{
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!re.test(email)){
                    $(".error").html("Please enter your correct email address");
                    return false;
                }
            }


            var packages = $("input:radio[name=packages]:checked").val();


            var clas=$("select[name=class]").val();

            if(packages==1 && clas==0){
                $(".error").html("Please enter your Class");
                return false;
            }


            var age=$("input[name=age]").val();

            if(age==''){
                $(".error").html("Please enter your Age");
                return false;
            }else{
                var patt = /[^0-9]/;
                var res = patt.test(age);

                if(res){
                    $(".error").html("Please enter corect Age");
                    return false;
                }
            }


            /*var n = $( "input[name=terms]:checked").length;

            if(n==0){
                $(".error").html("Please accept the terms");
                return false;
            }*/


            var permit = checkdb(phnumber,packages);

            if(permit==0){

                $(".error").html("Your DEMO Quota is full for this package!!");

                return false;
            }


            $.ajax({        
                type: "POST",
                url: "trialdb.php",
                data: { name : name, phnumber: phnumber,email : email, packages:packages, class : clas , age:age},
                success: function(data) {

                    $(".trial-overlayer").css('display','none');
                    $(".trial-toplayer").css('display','none');
                    $(".trial-overlayer-thanks").css('display','block');
                    $(".trial-toplayer-thanks").css('display','block');

                    trial_box_reset();
                    trial_thanks_box_align(); 

                    return false;
                }
            }); 

        });

        
        function checkdb(phnumber,packages){

            return $.ajax({        
                type: "POST",
                url: "trialdb-quotacheck.php",
                data: {phnumber:phnumber,packages:packages},
                async:false
            }).responseText;
        }
