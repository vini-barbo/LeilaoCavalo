<?php

$servername = "aws.connect.psdb.cloud";
$username = "a7bad60dyujwixthx9d7";
$password = "pscale_pw_cL4XRvXnXof42WqD6WQY2DoqGnKNEoffOwAlFHy0eeF";
$dbname = "ufrpe-eng-soft-db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}