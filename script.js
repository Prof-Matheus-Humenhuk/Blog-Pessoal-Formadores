// subsolo - interações do blog

document.addEventListener("DOMContentLoaded", function () {
  const btnEntrar = document.querySelector(".btn-entrar");

  if (btnEntrar) {
    btnEntrar.addEventListener("click", function () {
      window.location.href = "materias.html";
    });
  }
});