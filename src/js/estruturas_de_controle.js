var nome, nota01,nota02,media;
nome = prompt("Digite o nome do Aluno");
nota01 = prompt("Digite a nota01");
nota02 = prompt("Digite a nota02");
media = (parseInt(nota01) + parseInt(nota02) ) / 2;

if(media >= 50){
   alert("Aprovado ! " + nome);
}
else
   alert("Reprovado ! " + nome);