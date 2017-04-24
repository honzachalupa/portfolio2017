<?php
    $file = "data.json";
    $stream = fopen($file, "r") or die("Unable to open file " . $file);
    echo fread($stream, filesize($file));
    fclose($stream);
?>
