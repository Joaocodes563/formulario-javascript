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

  
const inputsvalidate = document.querySelectorAll("#nome, #cidade, #edereco");

inputsvalidate.forEach((input) => {
   input.addEventListener('keypress',function(e){
    const keycode = (e.keyCode ? e.keyCode : e.wich);
    if (keycode > 47 && keycode < 58) {
      e.preventDefault();
    }
   })
});
}) 

const inputnumber = document.querySelectorAll("#telefone, #numero_residencial");

function validarNumero(input) {
  input.value = input.value.replace(/[^0-9.-]/g, '');
}

var inputTelefone = document.getElementById("telefone");
var contador = document.getElementById("contador");

inputTelefone.addEventListener("input", function () {
  var valor = inputTelefone.value;
  
  if (valor.length <= 11) {
    contador.textContent = valor.length;
  }
  else {
    inputTelefone.value = valor.slice(0,11);
  }
});
