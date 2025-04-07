<?php
$dsn = 'mysql:host=mysql;dbname=feedbackdb;charset=utf8';
$user = 'user';
$password = 'password';

try {
    $pdo = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
    exit;
}
