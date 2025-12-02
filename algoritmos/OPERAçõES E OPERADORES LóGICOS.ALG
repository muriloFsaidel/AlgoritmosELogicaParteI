Algoritmo "Tipos de Operações e Operadores Lógicos"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Cleison
// Descrição   : Operações e Operadores Lógicos
// Autor(a)    : Murilo
// Data atual  : 12/10/2025
Var
// Seção de Declarações das variáveis
    nome: caractere
    nota01,nota02, media : real
    passou : logico
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou := falso
   escreval("Digite o nome do aluno")
   leia(nome)
   escreval("Digite a nota01")
   leia(nota01)
   escreval("Digite a nota02")
   leia(nota02)
   media := (nota01 + nota02) / 2

   //bicondicional (bicondicional)
   //se (media>= 50) entao "depende da outra"
      //se (media >=70) entao "uma"
      //escreval("Aprovado! ", nome)
      //fimse
   //senao
      //escreval("Reprovado! ", nome)
   //fimse
   
   se media >= 50 entao
      passou := verdadeiro
   fimse
   
   //original
   //se passou entao
      //escreval("Aprovado! ", nome)
   //senao
      //escreval("Reprovado! ", nome)

   //inversão ou negação da proposição (não)
   // conjunção (e), ambas sejam verdadeiras
   //se ( nao ( passou ) ) e (media = 0) entao
     // escreval("Rerovado! ", nome)
   //senao
     // escreval("Aprovado! ", nome)
   //fimse
   
   //disjunção (ou), se pelo menos um for verdadeira
   //se passou ou media >= 70 entao
      //escreval("Aprovado! ", nome)
   //senao
     //escreval("Rerovado! ", nome)
   //fimse

   //disjunção exclusiva ( && || )
   se ( passou ) e ( media >= 50 ou media <= 70) entao
      escreval("Aprovado! ", nome)
   senao
     escreval("Rerovado! ", nome)
   fimse
Fimalgoritmo