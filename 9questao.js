var entrada = require('readline-sync');
var largura_terreno = parseFloat(entrada.question('Digite o valor de largura de terreno: '));
var comprimento_terreno = parseFloat(entrada.question('Digite o valor de comprimento de terreno: '));
var largura_casa = parseFloat(entrada.question('Digite o valor de largura de casa: '));
var comprimento_casa = parseFloat(entrada.question('Digite o valor de comprimento de casa: '));

var terreno = largura_terreno * comprimento_terreno;
var casa = largura_casa * comprimento_casa;

if(terreno === casa ){
    console.log('A Área construída foi confirmado.');
}else{
    console.log('A Área não construída. (Terreno '+ terreno + ', casa ' + casa + ') além desses valores use outros de sua preferência.');
}
