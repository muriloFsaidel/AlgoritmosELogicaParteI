Algoritmo "estrutura_enquanto"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Cleison
// Descrição   : estrutura_enquanto
// Autor(a)    : Murilo
// Data atual  : 25/10/2025
Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade, contador, limite: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite o numero de vezes para calcular a idade: ")
   leia(limite)
   contador := 0
   enquanto contador < limite faca
            escreva("Digite o seu nome ")
            leia(nome)
            escreva("Digite a idade do(a) " , nome," ")
            leia(idade)
            se idade > 18 entao
                 escreval(nome, " você é maior de idade")
            senao
                 escreval(nome, " você é menor de idade")
            fimse
            contador := contador + 1
   fimenquanto
Fimalgoritmo