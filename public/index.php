<?php
include_once __DIR__ . "/../includes/app.php";

use Controllers\Layout;
use MVC\Router;

$router = new Router;


$router->get("/", [Layout::class, "redirect"]);
$router->get("/joacoh-web-portfolio", [Layout::class, "index"]);
$router->post("/joacoh-web-portfolio", [Layout::class, "index"]);

$router->get("/joacoh-curriculum-vitae", [Layout::class, "downloadcv"]);
$router->get("/joacoh-web-portfolio/projects/", [Layout::class, "index"]);


$router->post("/joacoh-web-portfolio/contact", [Layout::class, "emailTransfer"]);


$router->comprobarRutas();
