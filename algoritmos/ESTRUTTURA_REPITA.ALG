Algoritmo "estruttura_repita"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Cleison
// Descrição   : estruttura repita
// Autor(a)    : Murilo
// Data atual  : 27/10/2025
Var
// Seção de Declarações das variáveis 
   sairLoop: caractere
   valor01,valor02: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
         escreva("Digite o primeiro valor: ")
         leia(valor01)
         escreva("Digite o segundo valor: ")
         leia(valor02)
         escreval("Resultado: ", valor01+valor02)
         escreval("Desja sair? S/N")
         leia(sairLoop)
   ate  maiusc(sairLoop) <> "N"

Fimalgoritmo