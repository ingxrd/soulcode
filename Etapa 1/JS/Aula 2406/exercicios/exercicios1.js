// Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius.
//A equação para realizar a conversão é: C = (F - 32) / 1.8

let temperaturaFahrenheit = 80;
conversaoParaCelsius = (temperaturaFahrenheit-32)/1.8;
console.log("A temperatura em Celcius é: " + conversaoParaCelsius.toFixed(1) + "ºC");//toFixed formata a saída

let peso1 = 3;
let peso2 = 2;
let peso3 = 1;
let peso4 = 4;
let peso5 = 5;

let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let nota4= 10;
let nota5 = 6;

let calculoSomaPonderada = (nota1 * peso1 ) + (nota2 * peso2 ) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5) 
let calculoSomaPesos = peso1 + peso2 + peso3 + peso4 + peso5;
let mediaPonderada = calculoSomaPonderada/calculoSomaPesos;
console.log("A média ponderada é: " + mediaPonderada.toFixed(1));


// Posso fazer assim também

//exercicio 1 
let tempF = 80;
let tempC = (tempF - 32) / 1.8;
// Concatenação = juntar valores de variáveis no texto
console.log("A temperatura em celsius é " + tempC.toFixed(1) + " °C");

//exercicio 2
let n1 = 9.5; // peso 3
let n2 = 7.5; // peso 2
let n3 = 8.0; // peso 1
let n4 = 9.0; // peso 4
let n5 = 10.0; // peso 5

let mediaPonderada1 = (n1 * 3 + n2 * 2 + n3 * 1 + n4 * 4 + n5 * 5) / 15;

console.log("A média ponderada é: " + mediaPonderada.toFixed(2));