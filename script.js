const campoTexto = document.getElementById('campoNome');
const campoValor = document.getElementById('campoValor');
const alertMessage = document.getElementById('alert-camp-name');
const alertMessageSecondary = document.getElementById('alert-camp-value');

campoValor.addEventListener("input", function () {
   valor = campoValor.value;
   if (valor.length > 5) {
      alert('O valor não pode ter mais de 5 dígitos.');
      campoValor.value = '';
   }
})

function verificaDados() {

   if (campoTexto.value == '') {
      campoTexto.classList.add('inputInvalid');
      alertMessage.style.opacity = "1";
   } else {
      campoTexto.classList.remove('inputInvalid');
      alertMessage.style.opacity = "0";
   }
   if (campoValor.value == '') {
      campoValor.classList.add('inputInvalid');
      alertMessageSecondary.style.opacity = "1";
   } else {
      campoValor.classList.remove('inputInvalid');
      alertMessageSecondary.style.opacity = "0";
   }

   if (campoTexto.value != '' & campoValor.value != '') {
      inserirDados();
      campoTexto.value = '';
      campoValor.value = '';
   }

}

function inserirDados() {
   let table = document.getElementById('tableDados');
   let tableHeight = document.getElementById('tableDados').clientHeight;
   if (tableHeight < 380) {
      const novaLinha = table.insertRow();

      const celula1 = novaLinha.insertCell();
      const celula2 = novaLinha.insertCell();

      celula1.textContent = campoTexto.value;
      celula2.textContent = campoValor.value;
   } else {
      alert("Número máximo de produtos Atingido")
   }
}



