CREATE DATABASE petetec;

USE petetec;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(10,2),
    imagem VARCHAR(255)
);

CREATE TABLE carrinho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT,
    quantidade INT DEFAULT 1,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);
