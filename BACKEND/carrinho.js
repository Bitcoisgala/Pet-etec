 // Recupera os produtos do localStorage
 let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

 // Exibe os produtos no carrinho
 const carrinhoContainer = document.getElementById('carrinho');
 let total = 0;

 carrinho.forEach(produto => {
     // Criando os elementos dinamicamente
     let produtoDiv = document.createElement('div');
     produtoDiv.classList.add('produto');
     produtoDiv.innerHTML = `
         <div class="info">
             <h3>${produto.nome}</h3>
             <p>R$ ${produto.preco.toFixed(2)}</p>
         </div>
         <button class="remove-btn" onclick="removerProduto(${produto.preco})">Remover</button>
     `;
     carrinhoContainer.appendChild(produtoDiv);

     // Somar o total
     total += produto.preco;
 });

 // Exibe o total
 let totalDiv = document.createElement('div');
 totalDiv.classList.add('total');
 totalDiv.innerHTML = `<p><strong>Total:</strong> R$ <span id="totalValue">${total.toFixed(2)}</span></p><button class="finalizar-btn">Finalizar Compra</button>`;
 carrinhoContainer.appendChild(totalDiv);

 // Função para remover produto do carrinho
 function removerProduto(preco) {
     carrinho = carrinho.filter(produto => produto.preco !== preco);
     localStorage.setItem('carrinho', JSON.stringify(carrinho));
     window.location.reload();
 }
