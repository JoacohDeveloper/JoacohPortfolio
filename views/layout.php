<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, 
    initial-scale=1.0">
    <meta name="copyright" content="&copy; <?= date("Y") ?> Joaquín Álvarez">
    <meta name="description" content="Web Developer Portfolio">
    <meta name="keywords" content="Portfolio, PHP, Developer, CSS, JavaScript, SQL, MySql, SASS, HTML, Uruguay, Latam, South America, Web Developer, Backend, Frontend, FullStack, NodeJS, MongoDB, MERN, LAMP">
    <meta name="author" content="Joaquin Alvarez">
    <link rel="stylesheet" href="/build/css/app.css">
    <link rel="icon" type="image/x-icon" href="/build/img/favicon.ico">
    <title>Joacoh Portfolio</title>
</head>

<body>
    <div class="app">
        <?php echo $contenido; ?>
    </div>
</body>

</html>