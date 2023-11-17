// FAP - Turma 2: JavaScript e Orientação a Objetos - Trabalho 3 #94368

const prompt = require('prompt-sync')({sigint: true});

const banco = {
    conta: 85682596,
    saldo: 2000.00,
    tipo: "Paupança",
    agencia: 2589,
    numAgencia: function () {
        console.log(`Agência: ${banco.agencia}`);
    },

    buscarSaldo: function () {
        console.log(`Saldo em conta: $R ${banco.saldo.toFixed(2)}`);
    },

    transacao: function(){
        let opcao = parseInt(prompt("Digite Opção 1/Saque ou 2/Deposito: "));
        
        if(opcao === 1){
            let saque = parseInt(prompt("Digite o Valor do Saque: "));  

            console.log (`Valor Sacado: $R ${saque.toFixed(2)}`);
            banco.saldo = banco.saldo - saque;
            console.log (`Saldo atualizado: $R ${banco.saldo.toFixed(2)}`);
                
        }else if (opcao === 2){
            let deposito = parseInt(prompt("Digite o Valor do Deposito: "));

            console.log (`Valor Depositado: $R ${deposito.toFixed(2)}`);
            banco.saldo = banco.saldo + deposito;  
            console.log (`Saldo atualizado: $R ${banco.saldo.toFixed(2)}`);

        }else{
            console.log("Opção ivalida");
        }
    }    
}

    banco.numAgencia();
    console.log("");

    banco.buscarSaldo();
    console.log("");

    banco.transacao();


    




    /* numAgencia: function () {
        console.log(`Agência: ${banco.agencia}`);
    }, 

    buscarSaldo: function () {
        console.log(`Meu saldo é: $R ${banco.saldo.toFixed(2)}`);
    },

    depositos: function (){
        let deposito = 1000.00;
        console.log(`Foi depositado: $R ${deposito.toFixed(2)}`);
        banco.saldo = banco.saldo + deposito;
    },

    saques: function () {
        let saque = 1000.00;
        console.log (`Foi Sacado: $R ${saque.toFixed(2)}`);
        banco.saldo = banco.saldo - this.saldo;
    } */


/* banco.numAgencia();
banco.buscarSaldo(); // saldo atual 2000,00 
console.log("");



banco.depositos(); // depositado 1000,00
banco.buscarSaldo(); // saldo atual 3000,00 
console.log("");


banco.saques();// saque de 1000,00
banco.buscarSaldo();// saldo atual 1000,00 
console.log("");




banco.saques();// saque de 1000,00
banco.buscarSaldo(); //saldo atual 0,00  */

