

<?php

function s($str)
{
    $escapeHtml = htmlspecialchars($str, HTML_SPECIALCHARS);
    return $escapeHtml;
}



function doclog($param)
{
    echo "<pre>";
    var_dump($param);
    echo "</pre>";
    exit;
}
