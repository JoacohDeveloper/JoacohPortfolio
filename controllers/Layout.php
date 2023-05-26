<?php

namespace Controllers;

use MVC\Router;
use PHPMailer\PHPMailer\PHPMailer;

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
    public static function emailTransfer()
    {
        $errores = [];
        if ($_SERVER["REQUEST_METHOD"] === "POST") {


            if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
                $errores[] = "malformed email";
            }
            if (strlen($_POST["message"]) > 255) {
                $errores[] = "max length of message";
            }
            if (strlen($_POST["nombre"] < 1)) {
                $errores[] = "no name afford";
            }
            if (strlen($_POST["email"] < 1)) {
                $errores[] = "no email afford";
            }
            if (empty($errores)) {
                try {
                    $mail = new PHPMailer();
                    $mail->isSMTP();
                    $mail->Host = 'sandbox.smtp.mailtrap.io';
                    $mail->SMTPAuth = true;
                    $mail->Port = 2525;
                    $mail->Username = '3d339041765880';
                    $mail->Password = '7f6f3408dcc4ca';

                    $mail->setFrom('joacohportfolio@joacoh.com');
                    $mail->addAddress('joacohportfolio@joacoh.com', 'JoacohPortfolio.com');
                    $mail->Subject = 'Mensaje del portfolio';

                    // Set HTML
                    $mail->isHTML(TRUE);
                    $mail->CharSet = 'UTF-8';

                    $contenido = '<html>';
                    $contenido .= "<p>From: <strong>" . s($_POST["email"]) .  "</strong>.<br> Nombre: <strong>" . s($_POST["nombre"]) .  "</strong>.<br><strong>Mensaje: </strong>" . s($_POST["message"]) . ".</p>";
                    $contenido .= '</html>';
                    $mail->Body = $contenido;

                    //Enviar el mail

                    $result = $mail->send();
                    $_POST["result"] = $result;
                    echo json_encode($_POST);
                } catch (\Throwable $th) {
                }
            } else {
                header("Location: /");
            }
        }
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
