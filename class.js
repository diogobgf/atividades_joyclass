//Trabalho 01 (POO) #94373

class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
          this.modelo = modelo;
        this.ano = ano;
        this._aceleraracelerar = true;
        this._aceleraracelerarfreiar = false
        this._aceleraracelerarestacionar = false

        acelerar (){
            console.log("Carro Acelera");
        };

        #privateFreiar(){
            console.log("Carro Freiar");
        };

        #privateEstacionar(){
            console.log("Carro Estacionar");

        };


     }

     
}

const carro1 = new Carro ("fiat", "Tempra", 1999);
const carro2 = new Carro ("Ford", "Munstang", 1967);

console.log(carro1, carro2); 
