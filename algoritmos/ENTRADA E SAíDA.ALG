Algoritmo "Entrada e Saída"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Cleison
// Descrição   : Entrada e Saída
// Autor(a)    : Murilo
// Data atual  : 30/09/2025
Var
// Seção de Declarações das variáveis 
        nome: caractere
        idade: inteiro
        notaUm,notaDois,media,mediaEscolar: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
         escreval("Digite o seu nome")
         leia(nome)
         escreval("Digite a sua idade")
         leia(idade)
         escreval("Digite a 1° nota")
         leia(notaUm)
         escreval("Digite a 2° nota")
         leia(notaDois)
         media := (notaUm+notaDois) / 2
         //mediaEscolar := 7
         //variável mediaEscolar vem valorada do banco de dados da tabela aluno_nota
         se(media >= mediaEscolar)entao
         escreval("Aprovado")
         senao
         escreval("Reprovado")
         fimse
         
         escreval("O nome digitado foi: ", nome)
         escreval("A idade digitada foi: ", idade)


Fimalgoritmo