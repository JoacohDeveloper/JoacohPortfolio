<?php

use Dotenv\Dotenv;


$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();


function getConn()
{
    $db = null;

    try {
        $db = new mysqli($_ENV["DB_HOST"], $_ENV["DB_USER"], $_ENV["DB_PASS"], $_ENV["DB_NAME"]);

        return $db;
    } catch (mysqli_sql_exception $e) {
        exit;
    }
}
