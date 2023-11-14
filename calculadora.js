//FAP - Turma 2: JavaScript e Orientação a Objetos - Trabalho 5 #94364

const prompt = require('prompt-sync')({sigint: true});

numero1 = parseInt(prompt("Digite o primeiro numero: "));
numero2 = parseInt(prompt("Digite o segundo numero: "));

while (numero1 >= 0){
operador = prompt("Digite um operador da sua calculadora (+, - , x ou /): ");

    if (operador === "+"){
        soma = numero1 + numero2;
        console.log(`${numero1} + ${numero2} = ${soma}`)
        break
    } else if (operador === "-"){
        sub = numero1 - numero2;
        console.log(`${numero1} - ${numero2} = ${sub}`)
        break
    } else if (operador === "x"){
        mult = numero1 * numero2;
        console.log(`${numero1} x ${numero2} = ${mult}`)
        break
    } else if (operador === "/"){
        div = numero1 / numero2;
        resto = numero1 % numero2;
        console.log(`${numero1} ÷ ${numero2} = ${Math.trunc(div)} o resta da divisão é ${resto} `);
        break
    } else{
        console.log("Operador inválido");
    }
}