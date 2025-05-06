<?php
$conn = new mysqli("localhost", "usuario", "senha", "petetec");

$sql = "SELECT p.id, p.nome, p.preco, p.imagem, c.quantidade 
        FROM carrinho c 
        JOIN produtos p ON c.produto_id = p.id";

$result = $conn->query($sql);
$produtos = [];

while ($row = $result->fetch_assoc()) {
    $produtos[] = $row;
}

header('Content-Type: application/json');
echo json_encode($produtos);
?>
