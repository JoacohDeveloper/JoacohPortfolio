<?php

namespace Controllers;

use MVC\Router;

class Layout
{
    public static function redirect(Router $router)
    {
        header("Location: /joacoh-web-portfolio");
    }
    public static function index(Router $router)
    {
        $router->render("welcome/index");
    }
    public static function downloadcv(Router $router)
    {
        header("Content-type:application/pdf");
        $filename = $_SERVER['DOCUMENT_ROOT'] . "/build/pdf/Curriculum_vitae.pdf";

        // It will be called downloaded.pdf
        header('Content-Type: application/pdf');
        header("Content-Disposition: attachment; filename=Curriculum_Vitae.pdf");
        header('Content-Length: ' . filesize($filename));
        readfile($filename);

        // header("Location: /");
    }
}
