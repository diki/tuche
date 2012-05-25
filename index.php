<?php
	include 'lib/init.php';
?>

<!DOCTYPE html>

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7 ]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <title>listenoria</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    
	<base href="<?=HTTP_URL?>" />
    <!-- Le styles 
    <link href="style/bootstrap/css/bootstrap.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
    </style>
    <link href="style/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">-->
    <link href="style/normalize.css" rel="stylesheet">
    <link href="style/style.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    <!-- <link rel="shortcut icon" href="http://twitter.github.com/bootstrap/assets/ico/favicon.ico"> -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://twitter.github.com/bootstrap/assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://twitter.github.com/bootstrap/assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://twitter.github.com/bootstrap/assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="http://twitter.github.com/bootstrap/assets/ico/apple-touch-icon-57-precomposed.png">
  </head>

  <body>
<iframe src="http://vk.com/video_ext.php?oid=172782082&amp;id=162999293&amp;hash=e06e0afa4cdf5114&amp;hd=1" width="550" height="410" frameborder="0"></iframe>
<div id="mediaspace_wrapper" style="position: relative; width: 544px; height: 387px; ">
	<object type="application/x-shockwave-flash" 
			data="http://188.227.187.205/f/p2.swf" 
			width="100%" height="100%" bgcolor="#000000" id="mediaspace" name="mediaspace" tabindex="0">
			<param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always">
			<param name="seamlesstabbing" value="true">
			<param name="wmode" value="opaque">
			<param name="flashvars" value="netstreambasepath=http%3A%2F%2Fdizimag.com%2Fgame-of-thrones-2-sezon-8-bolum-izle-dizi.html&id=mediaspace&playlistfile=_list.asp%3Fdil%3D1%26x%3DPER5NUF3OUJ2NlBzOT5xOT5zNEFzJEB3PkFyPkJ0REd5MkF3ND56PT5zOUOBa3GuaT2waj21bIKwcnW0RERzNlByOkaBNlB5RFC6eXu0aXuBO0B5O0Z0NURxNh%26d.xml&autostart=false&screencolor=000000&amp;repeat=list&bufferlength=0&stretching=uniform&skin=%2Fsk%2FNewTubeDark%2FNewTubeDark.xml&abouttext=Dizimag&aboutlink=http%3A%2F%2Fwww.dizimag.com%2F&controlbar.position=bottom&playlist.position=none">
	</object>
</div>
    <!--<div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="/tuche">listenoria</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li><a href="">shit</a></li>
              <li><a href="">happens</a></li>
            </ul>
          </div></.nav-collapse 
        </div>
      </div>
    </div>-->
    
    <div id="player">
	    <div id="canvas-container">
			
		</div>
    </div>


	<script src="js/lib/json2.js" type="text/javascript"></script>
    <script src="js/lib/jquery.js<?=('?ver='.VERSION)?>" type="text/javascript"></script>
    <script src="js/lib/underscore.js<?=('?ver='.VERSION)?>" type="text/javascript"></script>
    <script src="js/lib/underscore.string.js<?=('?ver='.VERSION)?>" type="text/javascript"></script>
    <script src="js/lib/backbone.js<?=('?ver='.VERSION)?>" type="text/javascript"></script>
    <script src="js/lib/kinetic-v3.9.4.dev.js"></script>
    <script src="js/lib/soundmanager2.js"></script>
	
	
	<!-- configure it for your use -->
	<script type="text/javascript">
		soundManager.url = './swf';
		soundManager.useHighPerformance = true;
		soundManager.useHTML5Audio = true;
		soundManager.debugMode = false;
	</script>
	<!-- <script type="text/javascript">
	
	soundManager.url = './swf'; // directory where SM2 .SWFs live
	
	/*
	 * Note that SoundManager will determine and append the appropriate .SWF file to the URL,
	 * eg. /path/to/sm2-flash-files/soundmanager2.swf automatically.
	 *
	 * Bonus: Read up on HTML5 audio support, if you're feeling adventurous.
	 * iPad/iPhone and devices without flash installed will always attempt to use it.
	 *
	 * Also, See the flashblock demo when you want to start getting fancy.
	*/
	
	// disable debug mode after development/testing..
	// soundManager.debugMode = false;
	
	// The basics: onready() callback
	
	soundManager.onready(function(){
	
	  // SM2 has loaded - now you can create and play sounds!
	
	  var mySound = soundManager.createSound({
	    id: 'aSound',
	    url: './mp3/office_lobby.mp3'
	    // onload: myOnloadHandler,
	    // other options here..
	  });
	
	  mySound.play();
	
	});
	
	// Optional: ontimeout() callback for handling start-up failure
	
	soundManager.ontimeout(function(){
	
	  // Hrmm, SM2 could not start. Flash blocker involved? Show an error, etc.?
	
	});
	
	</script> -->
	<script src="js/init.js"></script>
	<!-- <script src="js/CurveAnimator.js"></script>
    <script src="js/model/PlayPointModel.js<?=('?ver='.VERSION)?>"></script>
    
    <script src="js/PlaypointCollection.js"></script>
    
    <script src="js/StageManager.js"></script>
    <script src="js/PlayerLinesManager.js"></script>
    <script src="js/PlayerPointsManager.js"></script>
    
    <script src="js/PlayPointModelView.js"></script>    
 	<script src="js/CanvasView.js<?=('?ver='.VERSION)?>" type="text/javascript"></script>
	<script src="js/SoundManagerView.js<?=('?ver='.VERSION)?>" type="text/javascript"></script>  
	 
	 <script src="js/app.js<?=('?ver='.VERSION)?>" type="text/javascript"></script> -->
</body></html>