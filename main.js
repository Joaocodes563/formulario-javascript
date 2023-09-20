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
  });