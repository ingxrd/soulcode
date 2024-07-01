//Declaração de function

/*function soma(a,b){
    return a+b;
}

let resultadoSoma = soma(10,5)
console.log(resultadoSoma)
*/
//Arrow function => é mais concisa 
const somaArrow = (a,b) => a+b

let resultadoArrow = somaArrow(5,20);
console.log(resultadoArrow);

//Arrow com corpo
const checarPar = (num) => {
    if (num % 2 == 0){
        console.log(`O número ${num} é par`)
        return true;
    } else {
        console.log(`O número ${num} é ímpar.`)
        return false;
    }
}

let conferindoPar = checarPar(37);
console.log(conferindoPar)


//Transformando em arrow
const compararString = (str1, str2) => str1 === str2;
console.log(compararString("soulcode", "soulcode"));

const soma2 =  (a,b) => a+b;
const testeFuncao = () => 2* soma2(5,9)

//Exemplo:

function extrairDigitosVerificadores(cpf) {
    const partesCpf = cpf.split("-");
    return partesCpf[1];
}


const extrairDigitosArrow = (cpf) => {
    const partesCpf = cpf.split("-");
    return partesCpf[1];
} 


const  extraindoArrow = (cpf) => cpf.split("-")[1]; //apenas em 1 linha

//for Each -> executa uma função para cada elemento no array
const numeros = [1,2,3,4,5,6,7,];

//funcionamento simliar ao do for-of
numeros.forEach((numero, index) => {
    console.log(`O elemento no índice ${index} é ${numero}`)
});

//exemplo: somar todos os numeros de um array (forEach);
let somando = 0; 
//quando a arrow tem 1 parametro, nao é obrigatório os parenteses 
numeros.forEach((numero) => {
    somando += numero
});

console.log(somando);

//simpificando ainda mais
let soma = 0;
numeros.forEach (numero => soma += numero);
console.log(soma);

