<?php

require 'flight/Flight.php';

Flight::register('db', 'PDO', array('mysql:host=localhost;dbname=prueba_tecnica_dev','root',''));

Flight::route('GET /empleado', function () {

    $sentencia = Flight::db()->prepare("SELECT * FROM `empleado`");
    $sentencia->execute();
    $datos = $sentencia->fetchAll();
    Flight::json($datos);

});

Flight::start();
