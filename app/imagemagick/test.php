<?php
$myurl = 'p00000.pdf[0]';
$image = new Imagick($myurl);
$image->setResolution( 300, 300 );
$image->setImageFormat( "png" );
$image->writeImage('newfilename.png');
echo "<html><head></head><body><img src=\"newfilename.png\"/></body></html>"

?>
