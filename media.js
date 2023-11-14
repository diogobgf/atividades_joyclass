//FAP - Turma 2: JavaScript e Orientação a Objetos - Trabalho Extra 02 #94362
 
const prompt = require('prompt-sync')({sigint: true});

nota1 = parseInt(prompt("Digite a Primeira nota: "));
nota2 = parseInt(prompt("Digite a Segunda nota: "));
nota3 = parseInt(prompt("Digite a Terceira nota: "));

var media = (nota1 + nota2 + nota3)/3 

console.log(`A Média é ${media}`);