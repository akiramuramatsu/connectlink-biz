<?php
require 'mixpanel.php';
$api_key = '4c0e9c992953d876ebd57c936e0e7be7';
$api_secret = '5514393a22a43ba7437c9ccc385bc0d8';

$mp = new Mixpanel($api_key, $api_secret);
$data = $mp->request(array('events', 'properties'), array(
    'event' => 'launch study app',
    'name' => 'page',
    'type' => 'general',
    'unit' => 'month',
    'interval' => '12',
    'limit' => '12'
));

var_dump($data);


?>