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

// retrieve past 60 days data
date_default_timezone_set("UTC");
$current_utc_time = time();
// currnet yyyy-mm-dd
$to_date = date("Y-m-d", $current_utc_time);
$from_utc_time = $current_utc_time - 60 * 60 * 24 * 60;//60 days in seconds
$from_date = date("Y-m-d", $from_utc_time);


$data_device = $mp->request(array('segmentation'), array(
    'event' => 'the first launch',
    'from_date' => $from_date,
    'to_date' => $to_date,
    'type' => 'unique',
    'unit' => 'month',
    'limit' => '5',
    'on' => 'properties["$os_version"]'
));
echo "<!--";
var_dump($data_device);
echo "--> \n";

$device_static_values = get_object_vars($data_device->data->values);
$total_data_os = calc($device_static_values);

$data_country = $mp->request(array('segmentation'), array(
    'event' => 'the first launch',
    'from_date' => $from_date,
    'to_date' => $to_date,
    'type' => 'unique',
    'unit' => 'month',
    'limit' => '5',
    'on' => 'properties["$country"]'
));
$device_static_values_country = get_object_vars($data_country->data->values);
$total_data_country = calc($device_static_values_country);


echo "<!--";
var_dump($device_static_values);
echo "--> \n";
echo "<!--";
var_dump($total_data_os);
echo "--> \n";



    function calc($device_static_values) {
    	$total_data_array = array();
		foreach ($device_static_values as $key => $value) {
			$data_key = $key;
			$total_data = 0;
			// 
			$value_map_data = get_object_vars($value);
			foreach ($value_map_data as $key2 => $value2) {
				$total_data += $value2;
			}
			$total_data_array[$data_key] = $total_data;
			// array_push($total_data_os, array($data_key => $total_data));
		}
		return $total_data_array;
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
.blackbox {
	text-align:center;
	background-color: #3e506a;
	border-radius: 10px;
}
.top-buffer { margin-top:20px; }
		</style>
		
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">

      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
      	
        // Set chart options
        var options = {'title':'Android OS Version'
        	,'backgroundColor' : '#3e506a'
        	,'titleTextStyle' : {color: 'white', fontSize:25}
        	,'tooltip': {textStyle: {color: 'white', fontSize:25}}
        	,'pieSliceTextStyle': {color: 'white'}
        	,'legend': {textStyle:{color: 'white', fontSize:14}}
        };
      	

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Version');
        data.addColumn('number', 'Count');
        data.addRows([
        	<?php
foreach ($total_data_os as $key2 => $value2) {
	echo "['".$key2."',".$value2."],\n";
}
        	?>
        ]);
        
        
        var data_country = new google.visualization.DataTable();
        data_country.addColumn('string', 'Version');
        data_country.addColumn('number', 'Count');
        data_country.addRows([
        	<?php
foreach ($total_data_country as $key2 => $value2) {
	echo "['".$key2."',".$value2."],\n";
}
        	?>
        ]);
        

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        var chart_country = new google.visualization.PieChart(document.getElementById('chart_country_div'));
        chart.draw(data, options);
        chart_country.draw(data_country, options);
        
        
        
      }
    </script>		
		
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
      
      <div class="row top-buffer">
        <div class="span4 blackbox">
        	<div id="chart_div"></div>
        </div>
        <div class="span4 blackbox">
        	<div id="chart_country_div"></div>
       </div>
        <div class="span4 blackbox">
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
