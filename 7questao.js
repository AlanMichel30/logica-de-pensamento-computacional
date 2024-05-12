var entrada = require('readline-sync');
var idade_A = parseInt(entrada.question("Digite a primeira idade: "));
var idade_B = parseInt(entrada.question("Digite a segunda idade: "));
var idade_C = parseInt(entrada.question("Digite a terceira idade: "));

if(idade_A < (idade_B + idade_C)){
     console.log('É Verdadeiro que a idade de ' + idade_A + ' é menor que as idades de ' + idade_B + ' e ' + idade_C + ' juntas.');
}
else{
     console.log('É Falso que a idade de ' + idade_A + ' é menor que as idades de ' + idade_B + ' e ' + idade_C + ' juntas.');
 }