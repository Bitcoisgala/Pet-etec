<?php
$conn = new mysqli("localhost", "usuario", "senha", "petetec");

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$produto_id = $_POST['produto_id'];

$sql = "SELECT * FROM carrinho WHERE produto_id = $produto_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $conn->query("UPDATE carrinho SET quantidade = quantidade + 1 WHERE produto_id = $produto_id");
} else {
    $conn->query("INSERT INTO carrinho (produto_id) VALUES ($produto_id)");
}

echo "Produto adicionado ao carrinho!";
?>
