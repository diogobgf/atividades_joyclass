// FAP - Turma 2: JavaScript e Orientação a Objetos - Trabalho 2 #94367

// Função sem Parâmetros:
function minhaFuncao(){
    return console.log("Minha Função");
}
minhaFuncao();


// Função com Parâmetros:
function mediaAluno(nota1, nota2) {
    return (nota1 + nota2) / 2;
    
}

console.log(`A Média é: ${mediaAluno(8,7)}`);

// Arrow Functions
const mediaAluno2 = (nt1, nt2) => console.log("A Média é: " + eval(nt1 + nt2)/2); 
mediaAluno2(8, 7);

