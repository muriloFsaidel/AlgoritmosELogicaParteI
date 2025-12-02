(function calculaAcao() {
                var valor01, valor02, resultado, operacao;
                valor01 = parseInt(prompt("Digite o primeiro número: "));
                operacao = prompt("Digite a operação, Ex: +,-,*,/");
                valor02 = parseInt(prompt("Digite o segundo número: "));

                if (operacao == "+") {
                                resultado = valor01 + valor02;
                } else if (operacao == "-") {
                                resultado = valor01 - valor02;
                } else if (operacao == "*") {
                                resultado = valor01 * valor02;
                } else if (operacao == "/") {
                                resultado = valor01 / valor02;
                } else {
                                document.getElementById("paragrafo").innerText = '';
                                document.getElementById("paragrafo").textContent += "Operação " + operacao + " inválida, execute a ação novamente";
                                resultado = -1.1;
                }

                if (resultado != -1.1) {
                                document.getElementById("paragrafo").innerText = '';
                                document.getElementById("paragrafo").textContent += "Resultado: " + resultado;
                }
})();
