<?php
require ('conexao.php');

if(isset($_GET['getLeiloes']) && $_GET['getLeiloes'] == "SIM")
{
    $sql = "SELECT * FROM leiloes";
    $result = $conn->query($sql);

    if ($result->num_rows > 0){
        $dados = array();

        while($row = $result->fetch_assoc()){
            $dados[] = $row;
        }
        header("Content-Type: application/json");
        echo json_encode($dados);
    } else {
        echo "Nenhum resultado encontrado.";
    }
    $conn->close();
}
if(isset($_GET['getProdutos']) && $_GET['getProdutos'] == "SIM")
{
    $sql = "SELECT * FROM produtos";
    $result = $conn->query($sql);

    if ($result->num_rows > 0){
        $dados = array();

        while($row = $result->fetch_assoc()){
            $dados[] = $row;
        }
        header("Content-Type: application/json");
        echo json_encode($dados);
    } else {
        echo "Nenhum resultado encontrado.";
    }
    $conn->close();
}
if(isset($_GET['getUsuarios']) && $_GET['getUsuarios'] == "SIM")
{
    $sql = "SELECT * FROM usuarios";
    $result = $conn->query($sql);

    if ($result->num_rows > 0){
        $dados = array();

        while($row = $result->fetch_assoc()){
            $dados[] = $row;
        }
        header("Content-Type: application/json");
        echo json_encode($dados);
    } else {
        echo "Nenhum resultado encontrado.";
    }
    $conn->close();
}

