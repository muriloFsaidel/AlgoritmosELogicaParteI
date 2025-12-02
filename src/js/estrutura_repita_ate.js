(async function calculoAcao(){
     var sairLoop, valor01,valor02;
     do{
           valor01 = parseInt(prompt("Digite o primeiro número"));
           valor02 = parseInt(prompt("Digite o segundo número"));
           document.getElementById("paragrafo").innerText = "Resultado: " + (valor01+valor02);
           await new Promise(r => setTimeout(r, 1000));
           sairLoop = prompt("Deseja sair? S/N");
     } while (sairLoop.toUpperCase() == "N")
})();