Algoritmo "operações aritméticas"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Cleison
// Descrição   : operações aritméticas
// Autor(a)    : Murilo
// Data atual  : 22/10/2025
Var
// Seção de Declarações das variáveis 
   resultado, valor01,valor02,valor03: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   valor01 := 10
   valor02 := 10
   valor03 := 10
   resultado := ( valor01 + valor02) / valor03
   escreval("Resultado (+)/: ", resultado)
   
   resultado := ( valor01 - valor02) / valor03
   escreval("Resultado (-)/: ", resultado)
   
   resultado := ( valor01 + valor02) * valor03
   escreval("Resultado (+)*: ", resultado)
   
   resultado := ( valor01 - valor02) * valor03
   escreval("Resultado (-)*: ", resultado)
   
   resultado := ( (valor01 + valor02 + valor02) / valor03) % 2
   escreval("Resultado (+)/%: ", resultado)

Fimalgoritmo