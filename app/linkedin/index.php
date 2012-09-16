<?php

$oauth = new OAuth( '1m4xzx01cl9p', 'Ds8vDpP3u5y1eq51' );	 // api key/secret for my app
$oauth->enableDebug();

$oauth->setToken( 'f11d674d-ea91-417b-ab25-81718d436675', '811d78dd-ca92-4b5c-86a0-9bbb64b3271b' );	 // user's access token/secret

$data = <<< EOB
<?xml version="1.0" encoding="UTF-8"?>
<share>
<comment>Test</comment>
<content>
<title>Testing Share Function</title>
<description>Sharing some information on LinkedIn</description>
<submitted-url>http://example.com</submitted-url>
</content>
<visibility>
<code>anyone</code>
</visibility>
</share>
EOB;

$url = 'http://api.linkedin.com/v1/people/~/shares';

$headers = array(
'Content-Type' => 'application/xml',
'x-li-format' => 'json'
);

try {

$oauth->fetch( $url, array($data), OAUTH_HTTP_METHOD_POST, $headers );

$response = json_decode( $oauth->getLastResponse() );

$response->response_info = (object) $oauth->getLastResponseInfo();

$response->success = ($response->response_info->http_code == 200);

} catch ( OAuthException $e ) {

echo "ERROR:\n";
print_r($e->getMessage()) . "\n";
print_r($oauth->debugInfo) . "\n";
die();

}

print_r($response);

?>