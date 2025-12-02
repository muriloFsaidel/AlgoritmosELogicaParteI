(function calculaAcao() {
                var numero, fatorial, indice;
                numero = parseInt(prompt("Digite um número: "));
                fatorial = 1;
                for (indice = 1; indice <= numero; indice++) {
                                fatorial *= indice;
                }

                document.getElementById("paragrafo").innerText = "O n! de " + numero + " é " + fatorial;
})();

