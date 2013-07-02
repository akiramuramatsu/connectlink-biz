<!DOCTYPE html>
<?php
require 'mixpanel.php';
$api_key = '4c0e9c992953d876ebd57c936e0e7be7';
$api_secret = '5514393a22a43ba7437c9ccc385bc0d8';

$mp = new Mixpanel($api_key, $api_secret);
$data = $mp->request(array('events'), array(
    'event' => array('launch study app'),
    'type' => 'general',
    'unit' => 'month',
    'interval' => '12',
    'limit' => '12'
));
echo "<!--";
var_dump($data);
echo "--> \n";
$total = 0;
foreach (get_object_vars($data->data->values->{'launch study app'}) as $key => $value) {
	$total += $value;
}
?>
<html>
	<head>
		<title>ConnectLink Dashboard</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <!-- Bootstrap -->
	    <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet" media="screen">		
	    <link href="assets/bootstrap/css/bootstrap-responsive.css" rel="stylesheet" media="screen">		
		<style type="text/css">
body {
	background-color: #00432f;
	color: #EEEEEE;
}			
		</style>
	</head>
<body>
	
<div class="container">

      <!-- Example row of columns -->
      <div class="row">
        <div class="span4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn" href="#">View details &raquo;</a></p>
        </div>
        <div class="span4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn" href="#">View details &raquo;</a></p>
       </div>
        <div class="span4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a class="btn" href="#">View details &raquo;</a></p>
        </div>
      </div>

      <hr>

      <footer>
        <p>&copy; Company 2013</p>
      </footer>

    </div>	
	
	
	<h1><?php echo $total;?> times</h1>

    <script src="http://code.jquery.com/jquery.js"></script>
    <script src="./assets/bootstrap/js/bootstrap.js"></script>
</body>
</html>
