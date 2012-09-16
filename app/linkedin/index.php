<?php

$oauth = new OAuth( '1m4xzx01cl9p', 'Ds8vDpP3u5y1eq51' );	 // api key/secret for my app
$oauth->enableDebug();

$oauth->setToken( 'f11d674d-ea91-417b-ab25-81718d436675', '811d78dd-ca92-4b5c-86a0-9bbb64b3271b' );	 // user's access token/secret


$params = array();
$headers = array();
$method = OAUTH_HTTP_METHOD_GET;

// Specify LinkedIn API endpoint to retrieve your own profile
$url = "http://api.linkedin.com/v1/people/~";

// By default, the LinkedIn API responses are in XML format. If you prefer JSON, simply specify the format in your call
// $url = "http://api.linkedin.com/v1/people/~?format=json";

// Make call to LinkedIn to retrieve your own profile
$oauth->fetch($url, $params, $method, $headers);

echo $oauth->getLastResponse();

?>