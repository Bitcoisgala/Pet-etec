const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let currentIndex = 0;

// Definindo largura do slider dinamicamente
slider.style.width = `${totalSlides * 100}%`;

function changeSlide() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  changeSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  changeSlide();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 15000);

// FIM CAROUSEL

// INICIO LOGIN

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if (user === "admin" && pass === "1234") {
      alert("Login bem-sucedido!");
      window.location.href = "index.html";
  } else {
      alert("Usuário ou senha incorretos!");
  }
}

// FIM LOGIN

// BOTÃO VOLTAR

    function voltar(){
      window.location.href = "index.html"
    }

// BOTÃO VOLTAR

// CRIAR CONTA

  function registrar() {
    let senha = document.getElementById("newPassword").value
    let confirmarsenha = document.getElementById("confirmPassword").value

    if (senha == confirmarsenha){
      alert("Conta criada com sucesso")
      window.location.href = "index.html"
    } else{
      alert("Algo deu errado, confirme se as informações foram digitadas corretamente")
    }
  }

// CRIAR CONTA

// INICIO DROPDOWN

function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Fecha o dropdown ao clicar fora
window.addEventListener('click', function(e) {
  const perfil = document.querySelector('.perfil_user');
  if (!perfil.contains(e.target)) {
      document.getElementById('dropdownMenu').style.display = 'none';
  }
});

// FIM DROPDOWN

// INICIO DE PRODUTO
// Cria uma variável para contar os itens no carrinho
let carrinhoCount = 0;
const carrinhoIcon = document.getElementById("carrinho-contador");

function addCarrinho() {
    carrinhoCount++;
    if (carrinhoIcon) {
        carrinhoIcon.textContent = carrinhoCount;
        carrinhoIcon.style.display = "inline-block";
    }

    // Notificação suave
    const msg = document.createElement("div");
    msg.textContent = "Produto adicionado ao carrinho!";
    msg.className = "notificacao";
    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 2000);
}

// FIM DE PRODUTO