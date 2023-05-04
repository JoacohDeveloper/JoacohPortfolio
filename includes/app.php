<?php


include_once __DIR__ . "/../vendor/autoload.php";
include "funciones.php";


include_once  __DIR__ . "/config/database.php";


$db = getConn();

use Model\ActiveRecord;

ActiveRecord::setdb($db);
