<?php
$conn = new mysqli("localhost", "usuario", "senha", "petetec");

$produto_id = $_POST['produto_id'];
$conn->query("DELETE FROM carrinho WHERE produto_id = $produto_id");
?>
