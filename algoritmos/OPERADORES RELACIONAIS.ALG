Algoritmo "operadores relacionais"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Cleison
// Descrição   : operadores relacionais
// Autor(a)    : Murilo
// Data atual  : 22/10/2025
Var
// Seção de Declarações das variáveis 
 nota01,nota02: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
nota01 := 20
nota02 := 15

se (nota01 > nota02) entao
   escreval("nota01 é maior")
 senao
   escreval("nota01 é menor")
fimse

nota01 := 10

se (nota01 < nota02) entao
   escreval("nota01 é menor")
senao
   escreval("nota01 é maior")
fimse


nota02 := 10

se (nota01 >= nota02) entao
   escreval("nota01 é maior ou igual")
senao
   escreval("nota01 é menor")
fimse

se (nota01 <= nota02) entao
   escreval("nota01 é menor ou igual")
senao
   escreval("nota01 é maior")
fimse

nota01 := 20

se (nota01 = nota02) entao
   escreval("nota01 é igual")
senao se (nota01 <> nota02) entao
   escreval("nota01 é diferente")
fimse

Fimalgoritmo