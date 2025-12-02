var nome, nota01,nota02,media, passou;

passou = false;

nome = prompt("Digite o nome do Aluno");
nota01 = prompt("Digite a nota01");
nota02 = prompt("Digite a nota02");
media = (parseInt(nota01) + parseInt(nota02) ) / 2;

if(media >= 50){//depende da outra
   passou = true;
}

/*
//original
//bicondicional (bicondicional)
   if (passou)//uma
      alert("Aprovado! "+ nome);
   else
      alert("Reprovado! "+ nome);

//inversão ou negação da proposição (não)
//bicondicional (bicondicional)
// conjunção (e), ambas sejam verdadeiras
   if ( (!passou) && (media == 0) )
     alert("Reprovado! "+ nome);
   else
     alert("Aprovado! "+ nome);
 

//disjunção (ou), se pelo menos um for verdadeira
   if (passou || media >= 70)
      alert("Aprovado! "+ nome);
   else
     alert("Reprovado! "+ nome);

*/
//disjunção exclusiva ( && || )
   if ( ( passou ) && ( media >= 50 || media <= 70) )
      alert("Aprovado! "+ nome);
   else
     alert("Reprovado! "+ nome);
