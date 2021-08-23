###Objetos de pessoas com veiculos

let address = {
  city: 'Joinville', 
  state: 'SC'
};

let veiculos = {
  veiculo1: {
    modelo:'Fiesta',
    marca: 'Ford'
  },
  veiculo2: {
    modelo:'Twister 250cc',
    marca: 'Honda'
  },
};

let family = { 
  nome: 'Carlão',
  idade: 30,
  filhos: 2,
  filho1: {
    sexo: 'menino'
  },
  filho2: {
    sexo: 'menina'
  },
  ...address,
  ...veiculos,
};

console.log(` O ${family.nome}, tem ${family.filhos} filhos, uma ${family.filho2.sexo} e um ${family.filho1.sexo}. Mora em ${family.city}, em ${family.state}, ele também tem um ${family.veiculo1.marca} ${family.veiculo1.modelo} e uma ${family.veiculo2.marca}, ${family.veiculo2.modelo} `)

### Criar uma função da qual eu possa validar se o retorno do numero
passado pelo usuário é PAR ou Impar. 

> 4 / 2 = 2  modulo === 0 > PAR
SENAO É IMPAR

SE O NUMERO DIVISIVEL POR 2
DA QUAL RETORNA 
RESTO 0
EXIBE PAR
SENÃO 
EXIBE IMPAR 



function par (numero) { 
  if (numero %2 === 0){
    console.log(`é par`);
  }  else {
    console.log(`não é par`);
  }
}

par (11)


###Função com Operador ternário

function Par(numero) {
  return numero % 2 === 0 ? 'Par' : 'Impar';
}



### Criar uma fn que exibe os dados de uma pessoa: 
Se a pessoa for > 18 
0. Exibir, você pode ter CNH

Se a pessoa for  < 18
1. Exibir, você ainda não pode dirigir!

---------------------------
2. Exiba o nome 
3. Exiba a sua cidade
*/

function deMaior (idade, nome, cidade) {
  let pessoa = {
  idade, 
  nome, 
  cidade}; 
  if (idade <= 18) { console.log( `A ${nome}, de ${cidade} não pode ser habilitada ainda`);
     }  else {
       console.log( `A ${nome}, de ${cidade} pode ser habilitada `);
     } 
}
deMaior (17, 'Bia', 'Joinville')
