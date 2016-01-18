
//facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=1375856982649443";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



//google
(function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.defer = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();


//linkedin
(function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = '//platform.linkedin.com/in.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();


//Twitter
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;
		js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document, 'script', 'twitter-wjs');


//google search
(function() {
    var cx = '000630371853806443736:vmqicevu0wi';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();

//analytics

/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44124470-1', 'http://motachashma.com');
  ga('send', 'pageview');
*/

/*For topbar AD*/
/*
$("#topbar_ad").css("display","inline-block");

var temp = $("#header").width() -($("#branding").width() + $("#subscription").width() + $("#beta").width() + 32);
$("#topbar_ad").css("width",temp);
$("#topbar_ad").css("margin-left",16);
$("#topbar_ad").css("margin-right",16);

if($(window).width()>768){

      $("#content_wrapper").css("padding-top",$("#topbar").outerHeight());

}else{

  $("#topbar_ad").css("width","100%");
  $("#topbar_ad").css("float","none");
  $("#topbar_ad").css("display","block");
  $("#topbar_ad").css("margin",0);

}
*/