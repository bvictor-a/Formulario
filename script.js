
function inserirDados() {
   var campoTexto = document.getElementById('campoNome');
   var campoValor = document.getElementById('campoValor');

   if (campoTexto.value == '' | campoValor.value == '') {
      alert("Nenhum dado inserido")
   }

   let tabela = document.getElementById('tableDados');

   const novaLinha = tabela.insertRow();

   const celula1 = novaLinha.insertCell();
   const celula2 = novaLinha.insertCell();

   celula1.textContent = campoTexto.value;
   celula2.textContent = campoValor.value;

   campoTexto.value = '';
   campoValor.value = '';
}



