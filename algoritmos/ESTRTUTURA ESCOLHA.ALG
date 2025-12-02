Algoritmo "estrtutura escolha"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Cleison
// Descrição   : estrtutura escolha
// Autor(a)    : Murilo
// Data atual  : 23/10/2025
Var
// Seção de Declarações das variáveis
   valor01,valor02,resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  escreva("Digite o primeiro número: ")
  leia(valor01)
  escreva("Digite a operação: Ex: =,-,*,/  ")
  leia(operacao)
  escreva("Digite o segundo número: ")
  leia(valor02)
  
  escolha operacao

         caso "+"
         resultado := valor01 + valor02
         escreva("Resultado: ", resultado)
         
         caso "-"
         resultado := valor01 - valor02
         escreva("Resultado: ", resultado)
         
         caso "*"
         resultado := valor01 * valor02
         escreva("Resultado: ", resultado)
         
         caso "/"
         resultado := valor01 / valor02
         escreva("Resultado: ", resultado)
         
         outrocaso
   escreva("operacao ", operacao, " inválida, execute o programa novamente")

  fimescolha

Fimalgoritmo