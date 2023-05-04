<?php

namespace MVC;


class Router
{
    public array $postRoutes = [];
    public array $getRoutes = [];

    public function get($url, $fn)
    {
        $this->getRoutes[$url] = $fn;
    }
    public function post($url, $fn)
    {
        $this->postRoutes[$url] = $fn;
    }
    public function comprobarRutas()
    {
        session_start();

        $protectedUrls = [];

        $urlActual =  $_SERVER["PATH_INFO"] ?? "/";
        $method = $_SERVER["REQUEST_METHOD"];

        if ($method === "GET") {
            $fn = $this->getRoutes[$urlActual] ?? null;
        } else {
            $fn = $this->postRoutes[$urlActual] ?? null;
        }

        if ($fn) {
            call_user_func($fn, $this);
        } else {
            http_response_code(404);
            echo "Error 404";
            exit;
        }
    }

    public function render($view, $args = [])
    {
        foreach ($args as $key => $value) {
            $$key = $value;
        }

        ob_start();
        include_once __DIR__ . "/views/$view.php";

        $contenido = ob_get_clean();

        include_once __DIR__ . "/views/layout.php";
    }
}
