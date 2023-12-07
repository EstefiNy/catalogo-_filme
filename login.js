function validarLogin() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  // Verificar se o email e a senha estão corretos
  if (email === "pessoa@gmail.com" && senha === "1234") {
    // Redirecionar para a página index.html após o login bem-sucedido
    window.location.replace("index.html");
  } else {
    alert("Email ou senha incorretos. Tente novamente.");
  }
}
