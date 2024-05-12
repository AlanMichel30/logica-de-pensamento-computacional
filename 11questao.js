var entrada = require('readline-sync');
var largura = parseFloat(entrada.question('Digite o valor de largura: '));
var comprimento = parseFloat(entrada.question('Digite o valor de comprimento: '));

var piso = largura * comprimento;
var ceramica = Math.ceil(piso/2.20);

console.log('A Estimativa da quantidade de caixas necessárias '+ ceramica);