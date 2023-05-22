<?php
include_once __DIR__ . "/../includes/app.php";

use Controllers\Layout;
use MVC\Router;

$router = new Router;


$router->get("/", [Layout::class, "redirect"]);
$router->get("/joacoh-web-portfolio", [Layout::class, "index"]);
$router->get("/joacoh-curriculum-vitae", [Layout::class, "downloadcv"]);





$router->comprobarRutas();
