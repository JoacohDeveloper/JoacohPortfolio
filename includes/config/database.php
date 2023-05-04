<?php

function getConn()
{
    $db = null;

    try {
        $db = new mysqli("localhost", "root", "1248", "gamesaccshop");

        return $db;
    } catch (mysqli_sql_exception $e) {
        exit;
    }
}
