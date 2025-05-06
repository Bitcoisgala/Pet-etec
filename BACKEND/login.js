function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("BACKEND/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data.includes("bem-sucedido")) {
            window.location.href = "index.html"; // redireciona para a página inicial
        }
    })
    .catch(error => console.error("Erro:", error));
}
