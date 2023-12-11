// FAP - Turma 2: JavaScript e Orientação a Objetos - Trabalho 07 (POO) #94382
const prompt = require('prompt-sync')({sigint: true});

function divisão (num1, num2){

  if(isNaN(num2) || num2 === 0 ){
    throw new Error ("O Divisor não é um Numero ou é 0 (Não é possível dividir por zero)");
  } return num1 / num2;
} 

try{
  let numero1 = parseInt(prompt("Digite o Primeiro Algarismo: "));
  let numero2 = parseInt(prompt("Digite o Segundo Algarismo: "));
  resultado = divisão(numero1, numero2) 
  console.log(resultado);
  
} catch (error){
     console.log("Erro:", error.message);
} 






/* try {
    // Código que pode lançar uma exceção
    console.log(10 / 0); // Divisão por zero
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
  } finally {
    console.log('Bloco "finally" sempre será executado.');
  }
 */

  