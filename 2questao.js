var entrada = require('readline-sync');

var nome = entrada.question('Digite o seu nome? ');
var sobrenome = entrada.question('Digite o seu sobrenome? ');

console.log('Seu nome completo é '+ nome + ' ' + sobrenome);

