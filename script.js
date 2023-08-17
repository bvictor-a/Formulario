
function inserirDados() {
   var campoTexto = document.getElementById('campoNome');
   var campoValor = document.getElementById('campoValor');

   if (campoTexto.value == '' | campoValor.value == '') {
      alert("Nome ou valor não inserido")

   } else {

      let table = document.getElementById('tableDados');
      let tableHeight = document.getElementById('tableDados').clientHeight;
      if (tableHeight < 380) {
         const novaLinha = table.insertRow();

         const celula1 = novaLinha.insertCell();
         const celula2 = novaLinha.insertCell();

         celula1.textContent = campoTexto.value;
         celula2.textContent = campoValor.value;

         campoTexto.value = '';
         campoValor.value = '';
      } else {
         alert("Numero máximo de produtos Atingido")
      }
   }

}



