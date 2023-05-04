<?php
include_once __DIR__ . "/../includes/app.php";

use Controllers\Layout;
use MVC\Router;

$router = new Router;


$router->get("/", [Layout::class, "index"]);





$router->comprobarRutas();
