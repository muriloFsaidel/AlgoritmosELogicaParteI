(function calculaAcao() {
   var valor01, valor02, resultado, operacao;
   var paragrafo = document.getElementById("paragrafo");
   
   valor01 = parseInt(prompt("Digite o primeiro número: "));
   operacao = prompt("Digite a operação, Ex: +,-,*,/");
   valor02 = parseInt(prompt("Digite o segundo número: "));

   switch (operacao) {

      case "+":
         resultado = valor01 + valor02;
         paragrafo.innerText = "Resultado: " + resultado;
         break;

      case "-":
         resultado = valor01 - valor02;
         paragrafo.innerText = "Resultado: " + resultado;
         break;

      case "*":
         resultado = valor01 * valor02;
         paragrafo.innerText = "Resultado: " + resultado;
         break;

      case "/":
         resultado = valor01 / valor02;
         paragrafo.innerText = "Resultado: " + resultado;
         break;

      default:
         paragrafo.innerText = "operacao " + operacao + " inválida, execute o programa novamente";
         break;

   }
})();
