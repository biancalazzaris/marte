// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function sum (x, y) {
  return 10+20
}
sum ()
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

let soma;
soma = sum() + 5 ;

// Qual o valor atualizado dessa variável?

soma //35

// Declare uma nova variável, sem valor.

let new;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
let new;
function Valor (){
  new = 1;
  return new;
}

// Invoque a função criada acima.

Valor()

// Qual o retorno da função? (Use comentários de bloco).
// Resposta: O Valor é 1

/* Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.*/

function Calcula( x, y, z){
	if(x === undefined || y === undefined || z === undefined ) {
		return 'Preencha todos os valores corretamente!';
	} else{
	  return x * y * z +2; 	
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
Calcula(10,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).?

/* 'Preencha todos os valores corretamente!'*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

Calcula(5,5,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

/*127*/


// Declarar uma variável chamada `myvar`, sem valor.

var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.

var soma = 15 + 8; 

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.

soma ++;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *=3;

// Qual é o valor da variável `soma` até aqui?

72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).

soma === myvar;

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

myvar <= soma;

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao (x,y){
  return x/y;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.

divisao (10,2)

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function condicao(x,y,z) {
	if (x !== undefined && y === undefined && z === undefined)
	   return x;
	else if (x !== undefined && y !== undefined && z === undefined)
	   return x + y;
	else if (x !== undefined && y !== undefined && z !== undefined)
	   return (x + y) / z;
	else if (x === undefined && y === undefined && z === undefined)
	   return false;
	else
	   return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

condicao() //false
condicao(1) //1
condicao(20, 20) //40
condicao(20,20,20) //2


/* Crie uma função que valide se o número informado é par ou ímpar, além disso precisa validar se o 
número informado é do tipo `number`, para satisfazer as condições:
 - Validar se foi inserida um dado
 - Validar se foi inserido um número
 - Validar se o número é ímpar ou par
 - Exiba as mensagens para cada caso informado acima.
 */


function valida(B){
  if(!B) {
    return 'Por favor, insira um número';
  } else if (typeof(B) !== 'number') {
    return 'Digite um número';
  } else if (B % 2 === 0) {
    return 'O número digitado é par';
  } else if (B % 2 === 1 ) {
    return 'O número digitado é ímpar';
  }
}

valida( ) // 'Por favor, insira um número'
valida('x') //'Digite um número'
valida(20) //'O número digitado é par'
valida(15) //'O número digitado é ímpar'