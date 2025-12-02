( async () => {
    var nome, idade, limite, contador;
    limite = parseInt(prompt("Digite o numero de vezes que a idade vai ser verificada: "));
    contador = 0;
    while (contador < limite) {
        nome = prompt("Digite o seu nome ");
        idade = parseInt(prompt("Digite a idade do(a) " + nome));
        if (idade > 18)
            document.getElementById("paragrafo").innerText = nome + " você é maior de idade!";
        else
            document.getElementById("paragrafo").innerText = nome + " você é menor de idade!";
        contador++;
        await new Promise(r => setTimeout(r, 1000));
    }
})();

