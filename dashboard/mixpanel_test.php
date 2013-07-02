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

var_dump($data);
echo "---- ----- \n";
var_dump($data->data->values->{'launch study app'});

$total = 0;
foreach (array($data->data->values->{'launch study app'}) as $key => $value) {
	$total += $value;
}
echo "<br/>".$total."<br/>";

?>