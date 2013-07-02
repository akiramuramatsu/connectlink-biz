<!DOCTYPE html>
<?php
require 'mixpanel.php';
$api_key = '4c0e9c992953d876ebd57c936e0e7be7';
$api_secret = '5514393a22a43ba7437c9ccc385bc0d8';

$mp = new Mixpanel($api_key, $api_secret);
$data = $mp->request(array('events'), array(
    'event' => array('launch study app', 'launch fun app', 'study completed'),
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
$total_fun = 0;
foreach (get_object_vars($data->data->values->{'launch fun app'}) as $key => $value) {
	$total_fun += $value;
}
$total_completed = 0;
foreach (get_object_vars($data->data->values->{'study completed'}) as $key => $value) {
	$total_completed += $value;
}

$data_device = $mp->request(array('segmentation'), array(
    'event' => 'the first launch',
    'from_date' => '2013-06-01',
    'to_date' => '2013-06-30',
    'type' => 'os_version',
    'unit' => 'day',
    'limit' => '255',
    'on' => 'properties["model"]'
));
echo "<!--";
var_dump($data_device);
echo "--> \n";


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
.blackbox {
	text-align:center;
	background-color: #3e506a;
	border-radius: 10px;
}
		</style>
	</head>
<body>
	
<div class="container">

      <!-- Example row of columns -->
      <div class="row">
        <div class="span4 blackbox">
          <h2><?php echo $total;?></h2>
          <h3>Launch Study App</h3>
        </div>
        <div class="span4 blackbox">
          <h2><?php echo $total_fun;?></h2>
          <h3>Launch Fun App</h3>
       </div>
        <div class="span4 blackbox">
          <h2><?php echo $total_completed;?></h2>
          <h3>Study Completed</h3>
        </div>
      </div>

      <hr>

      <footer>
        <p><img src="common/images/connectlink_logo_green.gif"/>&copy; Company 2013</p>
      </footer>

    </div>	
	
    <script src="http://code.jquery.com/jquery.js"></script>
    <script src="./assets/bootstrap/js/bootstrap.js"></script>
</body>
</html>
