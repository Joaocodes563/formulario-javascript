document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const cidade = document.getElementById("cidade").value;
    const endereco = document.getElementById("endereco").value;
    const numeroResidencial =
      document.getElementById("numero_residencial").value;

    if (
      !nome ||
      !telefone ||
      !cpf ||
      !cidade ||
      !endereco ||
      !numeroResidencial
    ) {
      alert("Por favor, preencha todos os campos.");
    } else {
      alert("Formulário enviado com sucesso!");
      form.reset();
    }
  });

  const inputName = document.querySelector("#nome");

  console.log(inputName);

  inputName.addEventListener("keypress", function(e) {

    const keycode = (e.keyCode ? e.keyCode : e.wich);
    if (keycode > 47 && keycode < 58) {
      e.preventDefault();
    }
  }) 
});


const inputName = document.querySelector("#cidade");

console.log(inputName);

inputName.addEventListener("keypress", function(e) {

  const keycode = (e.keyCode ? e.keyCode : e.wich);
  if (keycode > 47 && keycode < 58) {
    e.preventDefault();
  }
});
