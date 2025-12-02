Algoritmo "estrutura se-senao"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Cleison
// Descrição   : estrutura se-senao
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
  escreva("Digite a operação: Ex: =,-,*,/")
  leia(operacao)
  escreva("Digite o segundo número: ")
  leia(valor02)
  
  se ( operacao = "+" ) entao
     resultado := valor01 + valor02
  senao
       se ( operacao = "-" ) entao
          resultado := valor01 - valor02
  senao
       se ( operacao = "*" ) entao
          resultado := valor01 * valor02
  senao
       se ( operacao = "/") entao
          resultado := valor01 / valor02
  senao
       escreva("Operação inválida, execute novamente")
       resultado := -1.1
               fimse
          fimse
     fimse
fimse
     se ( resultado <> - 1.1) entao
          escreva("Resultado: ", resultado)
     fimse
Fimalgoritmo