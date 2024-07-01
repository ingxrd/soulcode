//Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.


function calcularIMC(peso,altura){
    return peso/(altura*altura);
}

function indicarStatusIMC(imc) {
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}

let imc = calcularIMC(50, 1.5);
console.log("IMC:", imc.toFixed(2)); 
indicarStatusIMC(imc);


//Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

function calculoPorcentagem(numero){
    if (numero >= 0 && numero <= 1){
        let porcentagem = numero * 100
        return porcentagem;
    }else{
        console.log("Por favor, insira um número entre 0 e 1.");
    }
}

let calculo1 = (calculoPorcentagem(0.456));
console.log(calculo1);



//Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

function numeroNegativo (numero){
    if (numero < 0 ){
        return true;
    } else {
        return false;
    }
} 

let numero12 = (numeroNegativo(-34));
console.log(numero12);

//Crie uma função que conte até um número passado por parâmetro. 
//Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.
//Inicialização, condição, Atualização

    function contar (numero){
        for( let i = 0; i < numero; i++){
            console.log(i);
        }
    }

contar(6);

//Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado

    function nomeCompleto (nome, sobrenome){
        return nomeCompleto = nome + " " + sobrenome;
    
    }

    let meuNome = (nomeCompleto("Ingrid", "Munhoz"));
    console.log(meuNome);

//Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

function calcularAreaCirculo (raio){
    const pi = 3.14;
    return pi * raio * raio;
}

let area1 = calcularAreaCirculo(30);
console.log(area1);

//1º passo = definir nome da minha função = nesse caso, calcularAreaCirculo, pq é isso que vamos fazer.
// 2º passo = definir o parâmetro = nesse caso, o meu parametro é apenas o raio, pq é o que a pessoa vai adicionar, ja que PI é uma constante e o calculo é raio * raio, ou seja, é o mesmo valor, logo, apenas 1 número.
// 3º passo = definir o valor da constante pi, que é 3.14
// 4ºpasso = definir o retorno, que é o calculo do circulo.
// 5º passo = criar variavel = calcularAreacirculo(INSERIR O VALOR DO RAIO AQUI);
//6º passo = imprimir o valor da area de Area1

//7. Crie uma função que recebe a área de um circulo e mostra o nível:
//    Entre 1 e 20 => Nível I | Entre 21 e 40 => Nível II | Qualquer outro diâmetro => Nível inválido

function mostrarNivelCirculo (raio){
    const pi = 3.14;
    let area =  pi * raio * raio;

    if (raio >=  1 && raio <= 20) {
        console.log("Nivel I");
    } else if (raio  >=  21 && raio <= 40 ) {
        console.log("Nivel II");
    } else {
        console.log("Nível inválido");
    }
    return area;
}

let area12 = mostrarNivelCirculo(300);


//Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.
    function stringMinuscula(palavra){
        return stringMinuscula = palavra.toLowerCase();
    }

let palavrinha = stringMinuscula("Olá, mundo!!");
console.log(palavrinha);


//Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.
function contarPalavra(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }
    return contador;
}

let verificarRepeticao = contarPalavra("ola", "a");
console.log(verificarRepeticao);  // Deve imprimir 5
