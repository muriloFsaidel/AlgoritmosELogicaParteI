var opcaoExecutar ='';

function escolha(opcao){

   switch (opcao){

        case "PA":        
          meuPrimeiro();
          opcaoExecutar = "meu_primeiro";
          break;

        case "ES":
          inputOutput();
          opcaoExecutar = "input_output";
          break;

        case "EC":
          estruturasControle();
          opcaoExecutar = "estruturas_de_controle";
          break;

        case "OL":
          operadoresLogicos();
          opcaoExecutar = "operacoes_logicas";
          break;  

        case "OA":              
          operadoresAritmeticos();
          opcaoExecutar = "operacoes_aritmeticas";
          break;

        case "OR":
          operadoresRelacionais();
          opcaoExecutar = "operadores_relacionais";
          break;

        case "C":
          Concatenacao();
          opcaoExecutar = "concatenacao";
          break;

        case "ECSS":
          estruturaCondicionalSeSenao();
          opcaoExecutar = "estrutura_se_senao";
          break;

        case "ECE":
          estruturaCondicionalEscolha();
          opcaoExecutar = "estrutura_escolha";
          break;

        case "PF":
          estruturaRepeticaoParaFaca();
          opcaoExecutar = "estrutura_para_faca";
          break;

        case "EF":
          estruturaRepeticaoEnquantoFaca();
          opcaoExecutar = "estrutura_enquanto";
          break;

        case "RA":
          estruturaRepeticaoRepitaAte();
          opcaoExecutar = "estrutura_repita_ate";
          break;

        case "G":
          gitAndGithub();
          break;
        
        case "":
          meuPrimeiro();
          opcaoExecutar = "meu_primeiro";
   }        
}

function executar(){
  if(document.getElementById("executar")){
    document.body.removeChild(document.getElementById("executar"));
  }  
  const script = document.createElement("script");
  script.id="executar";
  script.src = "./src/js/"+opcaoExecutar+".js";
  document.body.appendChild(script);
}

function meuPrimeiro() {
  const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 260px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Meu primeiro"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Primeiro Algoritmo";
  tp.style = "margin-top: 40px";
  pp.innerText="Em resumo, cria uma variável que vai representar a nota sendo do tipo inteiro, recebendo o valor 100 e exibindo na tela o texto Resultado concatenado com o valor da nota.\nOs tipos de dados são os mesmos em portugol e javascript, no exemplo podemos considerar como tipo o inteiro, real (ponto flutuante), caractere(“texto”), lógico(estado).";
  ip.src = "./src/img/pap.png";
  ip.style = "width: 800px; height: 300px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: 20px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/paj.png"
  ij.style = "width: 800px; height: 250px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "Sendo o mesmo algoritmo em Javascript, por ser fracamente tipada, apenas declaramos a variável sem tipo, atribuímos um valor separadamente e exibimos em uma janela o texto Resultado concatenado com o valor da variável.\nAs Variáveis são nomes associados a endereços de memória (objetos) que armazenam dados de um determinado tipo. Para criar as variáveis não podemos usar caracteres especiais(ç,$&), não inicia com número, não pode ser palavra reservada,  se for nome composto usar o padrão camelCase, onde a primeira letra da segunda palavra Fica maiúsculo.";
  document.getElementById("paragrafo").innerText = '';
  document.getElementById("paragrafo").style = "display: none";
}

function inputOutput() {
  const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 220px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Entrada e Saida"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Entrada e Saída";
  tp.style = "margin-top: 40px";
  pp.innerText="Na entrada, o algoritmo em tempo de execução recebe os dados do usuário, que após o processamento, gera uma saída sendo o resultado para solução do problema. Sempre pensando na usabilidade do usuário.\nNo exemplo, temos a entrada(leia) como nome e idade sendo solicitada no terminal e exibida posteriormente. Desta maneira, o usuário não sabe oque está sendo pedido, apenas digitou. Pensando na usabilidade, é melhor exibir o que está sendo pedido e depois ler a entrada correspondente.";
  ip.src = "./src/img/esportugol.png";
  ip.style = "width: 800px; height: 300px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: 80px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/esjs.png"
  ij.style = "width: 800px; height: 500px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "Apenas uma observação, que o escreval e o leia estão embutidos no comando prompt('texto') e o resultado pode ser expresso pelo alert.";
  document.getElementById("paragrafo").innerText = '';
  document.getElementById("paragrafo").style = "display: none";
}

function estruturasControle() {
const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 280px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Estrutura de Controle"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Estruturas de Controle";
  tp.style = "margin-top: 40px";
  pp.innerText="Estruturas de Controle\nSequencial:  Execução das ações de um algoritmo linha a linha.\nCondicional: Tomada de decisão: SE...SENÃO....ESCOLHA/ IF...ELSE...SWITCH.\nRepetição: Repete um trecho de código por um determinado número de vezes enquanto a condição for verdadeira: PARA ... FAÇA...ENQUANTO...FAÇA..REPITA..ATÉ/ FOR...WHILE...DO-WHILE.\nO exemplo, simula a média do aluno, usando as variáveis nome, nota01,nota02,media. Informando o que está sendo pedido, solicitando as entradas por parte do usuário , fazendo o cálculo da média, verificando se a média é maior ou igual 50, caso seja verdadeiro, exibe aprovado com o nome do aluno senão, exibe reprovado com o nome do aluno.";
  ip.src = "./src/img/ecportugol.png";
  ip.style = "width: 800px; height: 800px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: -90px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/ecjavascript.png"
  ij.style = "width: 800px; height: 800px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "Em Javascript, é bem similar, com exceção que o tipo não precisa ser declarado, o terminal com a entrada de dados é feita pelo comando prompt e o dado informado é armazenado na variável em formato de texto, então na hora de fazer o cálculo é preciso converter as “strings” em número inteiro. A tomada de decisão se dá pelo if -> se,{}->então para múltiplas linhas de código, else-> senão e a exibição do resultado pelo método alert.Em ambos os casos, tem a estrutura sequencial linha a linha e a condicional pelo se(if)...entao({})...senao(else).";
  document.getElementById("paragrafo").innerText = '';
  document.getElementById("paragrafo").style = "display:none";
}

function operadoresLogicos() {
const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 280px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Operações lógicas"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Operações lógicas";
  tp.style = "margin-top: 40px";
  pp.innerText="Operações e operadores lógicos Operações são fluxos definidos caso uma proposição seja verdadeira ou falsa.\nTipos: \n° Negação: usada para inverter ou negar a proposição, pelo símbolo de ~ em fluxograma e ! em linguagens de programação.\n° Conjunção: quando a proposição é verdadeira somente se ambos os valores forem verdadeiros, pelo símbolo de ^ em fluxograma e && em linguagens de programação.\n° Disjunção: quando a proposição é verdadeira se pelo menos um dos valores for verdadeiro, pelo símbolo de v em fluxograma e | | em linguagens de programação.\n° Disjunção exclusiva: Quando apenas uma proposição é verdadeira, pelo símbolo de v em fluxograma e && + | |, && ++ && em linguagens de programação.\n° Condicional: Se a proposição é verdadeira então temos um resultado. pelo símbolo de -> em fluxograma e () em linguagens de programação.\n° Bicondicional (aninhado): quando uma proposição depende da outra, pelo símbolo de ,<-> em fluxograma e () && () em linguagens de programação.";
  ip.src = "./src/img/olportugol.png";
  ip.style = "width: 800px; height: 800px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: -339px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/oljavascript.png"
  ij.style = "width: 800px; height: 800px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "Apenas uma observação, que o escreval e o leia estão embutidos no comando prompt('texto'). Como o prompt armazena texto, mesmo que digite números, é necessário converter o texto para número através do parseInt().";
  document.getElementById("paragrafo").innerText = '';
  document.getElementById("paragrafo").style = "display:none";
}

function operadoresAritmeticos() {
const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 300px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Operadores Aritméticos"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Operadores Aritméticos";
  tp.style = "margin-top: 40px";
  pp.innerText="Operadores Aritméticos\nEstes operadores são usados para fazer operações matemáticas:\n°+ soma\n°- subtração\n°/ divisão\n°* multiplicação\n°% módulo\n O exercício usa valores fixos e apenas exibe os resultados das operações.";
  ip.src = "./src/img/oaportugol.png";
  ip.style = "width: 800px; height: 800px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: -173px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/oajavascript.png"
  ij.style = "width: 800px; height: 800px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "Apenas uma observação, o escreval está sendo substituido pelo alert";
  document.getElementById("paragrafo").innerText = '';
  document.getElementById("paragrafo").style = "display: none";
}

function operadoresRelacionais() {
const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 300px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Operadores Relacionais"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Operadores Relacionais";
  tp.style = "margin-top: 40px";
  pp.innerText="Operadores Relacionais\nUsados para fazer comparação de dados:\n° > maior\n° >= maior ou igual\n° < menor\n° <=menor ou igual\n° = ou == igual em valor ou === idêntico (valor e tipo igual)\n° <> ou != diferente";
  ip.src = "./src/img/orportugol.png";
  ip.style = "width: 800px; height: 800px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: -173px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/orjavascript.png"
  ij.style = "width: 800px; height: 800px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "Apenas uma observação, o escreval está sendo substituido pelo alert";
  document.getElementById("paragrafo").innerText = '';
  document.getElementById("paragrafo").style = "display: none";
}

function Concatenacao() {
const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 200px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Concatenação"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Concatenação";
  tp.style = "margin-top: 130px";
  pp.innerText="Ela é a junção de uma informação/dado com um texto explicativo por ‘+’ ou ‘,’ .";
  ip.src = "./src/img/cportugol.png";
  ip.style = "width: 800px; height: 500px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: 50px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/cjavascript.png"
  ij.style = "width: 800px; height: 200px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "No Javascript ao invés de exibir o resultado por um alert, podemos usar o DOM para manipular o documento html, carregando o script depois do carregamento da página e criando um parágrafo identificado unicamente pelo id=”paragrafo” no corpo da página. Onde no arquivo .js  usando document para resgatar o documento html e acessar o elemento parágrafo<p> pelo id (getElementById) para atribuir o contéudo/texto interno com a concatenação do valor da variável nome com o texto “ : “ com o valor da variável numero com o “ ” e o valor 15, sendo que, os valores de nome e numero foram tirados do prompt(input) de dados. ";
  document.getElementById("paragrafo").innerText = 'Resultado';
  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style = "position: absolute; margin:10px; left: 45%; font-size: larger;font-weight: 700;text-shadow: -16px 15px 20px rgba(217, 212, 212, 1);background-color: rgba(51, 255, 48, 1);border: 8px dashed yellow; padding: 10px; margin-top: 20px;"
}

function estruturaCondicionalSeSenao() {
const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 400px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Estrutura Condicional Se Senão"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Estrutura Condicional Se Senão";
  tp.style = "margin-top: -40px";
  pp.innerText="Estrutura Se e Senão\nEssa estrutura verifica se uma proposição é verdadeira para executar uma ou mais instruções, em caso de ser incorreta o senão executa outras instruções.";
  ip.src = "./src/img/essportugol.png";
  ip.style = "width: 800px; height: 500px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: 110px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/essjavascript.png"
  ij.style = "width: 800px; height: 450px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "No Javascript, cria-se uma função para evitar que o código seja automaticamente acionado ao ser carregado pela tag script, ao invés de criar as variáveis fora dela ( escopo global ), elas são criadas dentro da função (escopo local) e acionada pelo click do botão html.\nA função vai ter a responsabilidade de solicitar e armazenar valores como valor 1 e 2 de texto para inteiro e a operação matemática desejada. Ao terminar de ler o valor 2, é feita uma série de verificações de condições se a operação é uma soma, senão subtração, senão multiplicação, senão divisão senão nenhuma delas (inválida), para então realizar o cálculo pretendido e exibí-lo no parágrafo html ou de mensagem de erro, caso a operação seja inválida. ";
  document.getElementById("paragrafo").innerText = 'Resultado';
  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style = "position: absolute; margin:10px; left: 45%; font-size: larger;font-weight: 700;text-shadow: -16px 15px 20px rgba(217, 212, 212, 1);background-color: rgba(51, 255, 48, 1);border: 8px dashed yellow; padding: 10px; margin-top: 20px;"
}

function estruturaCondicionalEscolha() {
const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 380px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Estrutura Condicional Escolha Caso"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Estrutura Condicional Escolha Caso";
  tp.style = "margin-top: -77px";
  pp.innerText="Estrutura Escolha\nEsta estrutura é mais indicada quando há muitos se e senão aninhados, fazendo com que o código fique mais legível.";
  ip.src = "./src/img/eceportugol.png";
  ip.style = "width: 800px; height: 500px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: 122px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/ecejavascript.png"
  ij.style = "width: 800px; height: 650px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "Em Javascript é bem parecido, a diferença é que as chaves que representam a cláusula então são obrigatórias assim como as paradas que são representadas pela cláusula break, evitando que a verificação continue após um caso ser atendido. Cria a constante paragrafo para armazenar uma referência do parágrafo html, para exibir o resultado apenas quando o caso for atendido ou for outro caso exibindo uma mensagem de erro. ";
  document.getElementById("paragrafo").innerText = 'Resultado';
  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style = "position: absolute; margin:10px; left: 45%; font-size: larger;font-weight: 700;text-shadow: -16px 15px 20px rgba(217, 212, 212, 1);background-color: rgba(51, 255, 48, 1);border: 8px dashed yellow; padding: 10px; margin-top: 20px;"
}

function estruturaRepeticaoParaFaca() {
const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 400px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Estrutura de Repetição Para Faca"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Estrutura de Repetição Para Faca";
  tp.style = "margin-top: 130px";
  pp.innerText="Estrutura Para Faca\nA estrutura faz com que um bloco de instruções se repita um determinado número de vezes dentro dela. Em especial, a pós incrementação é feita automaticamente no Portugol, enquanto que no Javascript é  manual usando ++ para que o contador / índice incremente em mais 1 após executar a instrução. E por fim, o limite de repetições é dada pela condição (até).";
  ip.src = "./src/img/epfeportugol.png";
  ip.style = "width: 800px; height: 500px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
 tjs.style = "margin-top: -52px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/epfjavascript.png"
  ij.style = "width: 800px; height: 350px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "Em ambos os programas é calculado o fatorial do número digitado pelo usuário, então este cálculo é repetido até que o contador/índice se iguale ao número digitado (limite) ou enquanto ele for menor ou igual ao número. O cálculo se dá pelo fatorial acumulador multiplicado pelo contador, então ao invés de fazer 5*4*3*2*1, se faz 1*1=1*2=2*3=6*4=24*5=120. ";
  document.getElementById("paragrafo").innerText = 'Resultado';
  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style = "position: absolute; margin:10px; left: 45%; font-size: larger;font-weight: 700;text-shadow: -16px 15px 20px rgba(217, 212, 212, 1);background-color: rgba(51, 255, 48, 1);border: 8px dashed yellow; padding: 10px; margin-top: 20px;"
}

function estruturaRepeticaoEnquantoFaca() {
  const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 413px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Estrutura de Repetição Enquanto Faca"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Estrutura de Repetição Enquanto Faca";
  tp.style = "margin-top: 130px";
  pp.innerText="Estrutura Enquanto\nEsta estrutura também repete um bloco de código um determinado número de vezes, porém o limite não é pré conhecido. O contador/índice é definido e valorado fora do laço e o incremento é feito dentro do laço, restando apenas a condição para continuar o fluxo ou não.\nExemplo, pessoa é maior de idade e o usuário precisa determinar o limite de vezes que isto será verificado.";
  ip.src = "./src/img/eefeportugol.png";
  ip.style = "width: 800px; height: 500px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: 5px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/eefjavascript.png"
  ij.style = "width: 800px; height: 350px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "Javascript\nEm JavaScript, uma Promessa é um objeto que representa o resultado de uma operação assíncrona — algo que será concluído posteriormente (por exemplo: buscar dados de uma API, aguardar um temporizador, ler um arquivo, etc.).\nVocê pode pensar nisso como uma 'promessa' que lhe dará um valor no futuro. Em termos de código, a função fica com o termo async (assíncrona) e no final await new Promise(r => setTimeOut(r, 1000); para pausar o javascript por 1 segundo.";
  document.getElementById("paragrafo").innerText = 'Resultado';
  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style = "position: absolute; margin:10px; left: 45%; font-size: larger;font-weight: 700;text-shadow: -16px 15px 20px rgba(217, 212, 212, 1);background-color: rgba(51, 255, 48, 1);border: 8px dashed yellow; padding: 10px; margin-top: 20px;"
}

function estruturaRepeticaoRepitaAte() {
const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  document.querySelector("select").style="width: 413px;";
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  button.classList.add("aparecer");
  button.innerText = "Executar Estrutura de Repetição Repita Até"
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Estrutura de Repetição Repita Até";
  tp.style = "margin-top: 130px";
  pp.innerText="Estrutura Repita\nEsta estrutura é um enquanto faça “invertido”, ou seja, ele permite repetir o bloco de código pelo menos uma vez e no final verifica a condição, para seguir em frente ou não com o fluxo.\nPortugol\nO Programa vai pedir os valores, mostrar o resultado e pergunta se deseja sair ou não, a estrutura vai verificar dizendo execute o bloco de código até que a condição seja verdadeira, ou seja, enquanto a condição for falsa, repita o trecho.";
  ip.src = "./src/img/eraeportugol.png";
  ip.style = "width: 800px; height: 500px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Javascript";
  tjs.style = "margin-top: -200px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/erajavascript.png"
  ij.style = "width: 800px; height: 350px;";
  const pjs = document.getElementById("PJS");
  pjs.innerText = "No Javascript, diz que enquanto a condição for verdadeira, repita o bloco de código até que ela seja falsa.";
  document.getElementById("paragrafo").innerText = 'Resultado';
  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style = "position: absolute; margin:10px; left: 45%; font-size: larger;font-weight: 700;text-shadow: -16px 15px 20px rgba(217, 212, 212, 1);background-color: rgba(51, 255, 48, 1);border: 8px dashed yellow; padding: 10px; margin-top: 20px;"
}

function gitAndGithub(){
  const div = document.querySelector(".dinamico");
  div.classList.remove("aparecer");
  div.classList.add("aparecer");
  const button = document.getElementById("btn-executar");
  button.classList.remove("aparecer");
  document.querySelector("select").style="width: 200px;";
  const tp = document.getElementById("TPortugol");
  const pp = document.getElementById("PPortugol");
  const ip = document.getElementById("iPortugol");
  tp.innerText="Git & GitHub";
  tp.style = "margin-top: -440px";
  pp.innerText="Ambas as tecnologias se movimentam pelos repositórios, desta forma, partindo deste ponto o reposiório é o local onde o código-fonte vai ser hospedado que normalmente em um projeto costumar ser versionado, por esta razão o git é o sisterma de versionamento de código embutido neste repositório, que vai dizer como controlar o versionamento de arquivos/código-fonte de forma que uma equipe possa criar inúmeras versões sem gerar conflitos ou perca de conteúdo, podendo consultar cada uma dessas versões por meio de um histórico de atualizações e autores chamado de 'commit'. O Github é a plataforma que hospeda os repositórios com esse sistema embutido.";
  ip.src = "./src/img/github.png";
  ip.style = "width: 800px; height: 500px;";
  const tjs = document.getElementById("TJS");
  tjs.innerText = "Comandos Git";
  tjs.style = "margin-top: 15px";
  const ij = document.getElementById("iJavascript");
  ij.src = "./src/img/ramos.png"
  ij.style = "width: 500px; height: 500px;";
  const pjs = document.getElementById("PJS");
  pjs.innerHTML = "Principais comandos Git (mais utilizados) considerando um projeto existente remotamente:<br/><br/>° <strong>git clone:</strong> faz uma cópia exata de um repositório remoto para a sua máquina;<br/>°  <strong>git status</strong>: verifica qual o ramo atual, quais arquivos estão sendo rastreados ou não e que precisam ser registrados em uma versão na linha do tempo (commit);</br>° <strong>git add .</strong>: serve para adicionar todos os arquivos que não estão rastreados pelo git, seja um arquivo novo ou modificado ;<br/>° <strong>git commit -m 'mensagem descritiva'</strong>: adiciona os arquivos na linha do tempo como uma nova versão;<br/>° <strong>git checkout novoRamo</strong>: troca de ramo (branch) ou cria uma, caso não exista.;<br/>° <strong>git push</strong>:  atualiza o repositório remoto com base na versão local;<br/>° <strong>git pull</strong>: baixar a versão do ramo remoto para a máquina local ;<br/>° <strong>git remote add origin https://github.com/seu-usuario/seu-projeto.git.</strong>: cria um vínculo do repositório local com o remoto, sendo origin o apelido padrão desta nova conexão e o link é o endereço do repositório remoto.;<br/>° <strong>merge (mescla ou fusão) e pull-request (solicitação de mudança)</strong>:<br/>Para explicar os dois, precisa partir do uso dos ramos (branches), eles são importantes para gerar versões separadas/em desenvolvimento de algum recurso novo (feature)/incremental que busca aprimorar e preservar a versão principal (main/trunk) até chegar em uma versão final. Por exemplo, versão 1.1 inclusão de um novo botão interativo, versão 1.2 criação do arquivo js, versão 2.0 botão incluído e funcionando. Neste ponto chega-se ao pull-request para que a versão x.x seja apresentada as pessoas, e ser analisada e aprovada por elas (membros da equipe), e uma aprovada ela pode ser merged (mesclada) com a versão principal. ";
  const paragrafo = document.getElementById("paragrafo");
  paragrafo.style = "position: absolute; margin:10px; left: 48.8%; top: 135%; font-size: larger;font-weight: 700;text-shadow: -16px 15px 20px rgba(217, 212, 212, 1);background-color: rgba(51, 255, 48, 1);border: 8px dashed yellow; padding: 10px; margin-top: 20px;"
  paragrafo.innerHTML = "Hackerrank:<br/><a href='https://www.hackerrank.com/challenges/camelcase/problem' target='new_blank'>CamelCase</a><br/><a href='https://www.hackerrank.com/challenges/missing-numbers/problem' target='new_blank'>Missing Numbers</a>"
}