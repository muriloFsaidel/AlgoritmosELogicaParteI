Algoritmo "Estruturas de Controle"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Cleison
// Descrição   : Estruturas de Controle
// Autor(a)    : Murilo
// Data atual  : 01/10/2025
Var
// Seção de Declarações das variáveis 
    nome: caractere
    nota01,nota02, media : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o nome do aluno")
   leia(nome)
   escreval("Digite a nota01")
   leia(nota01)
   escreval("Digite a nota02")
   leia(nota02)
   media := (nota01 + nota02) / 2
   
   se (media>= 50) entao
      escreval("Aprovado! ", nome)
   senao
      escreval("Reprovado! ", nome)
   fimse

Fimalgoritmo