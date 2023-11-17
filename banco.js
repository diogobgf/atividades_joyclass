const prompt = require('prompt-sync')({sigint: true});

const banco = {
    conta: ("85682596-8"),
    saldo: 2000.00,
    tipo: "Paupança",
    agencia: 2589,
    numConta: function () {
        console.log(`Conta: ${banco.conta}`);
    },

    buscarSaldo: function () {
        console.log(`Saldo em conta: $R ${banco.saldo.toFixed(2)}`);
    },

    transacao: function(){
        let opcao = parseInt(prompt("Digite Opção 1/Saque ou 2/Deposito: "));
        
        if(opcao === 1){
            let saque = parseFloat(prompt("Digite o Valor do Saque: "));  

            console.log("");
            
            if (saque > banco.saldo){
                console.log("Saldo Insuficiente");
            }else{
                console.log (`Valor Sacado: $R ${saque.toFixed(2)}`);
                banco.saldo = banco.saldo - saque;
                console.log (`Saldo atualizado: $R ${banco.saldo.toFixed(2)}`);
            }
                
        }else if (opcao === 2){
            let deposito = parseFloat(prompt("Digite o Valor do Deposito: "));

            console.log("");
            console.log (`Valor Depositado: $R ${deposito.toFixed(2)}`);
            banco.saldo = banco.saldo + deposito;  
            console.log (`Saldo atualizado: $R ${banco.saldo.toFixed(2)}`);

        }else{
            console.log("Opção ivalida");
        }
    }    
}

    console.log("");
    banco.numConta();
    console.log("");

    banco.buscarSaldo();
    console.log("");

    banco.transacao();

