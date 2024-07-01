// 1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:

//     Maior ou igual 7 = Aprovado
//     Entre 5 e 7 = Reforço
//     Menor que 5 = Reprovação


// let nota1 = 7;
// let nota2 = 8;
// let nota3 = 9;

// media = (nota1+nota2+nota3) / 3

// if (media >= 7){
//     console.log("Sua média é de: " + media + "\n Parabéns! Você foi aprovado(a)!" );
// } else if (media > 5 < 7){
//     console.log("Sua média é de: " + media + "\n Você deve realizar Reforço.");
// } else {
//     console.log("Sua média é de: " + media + "\n Você foi reprovado.");
// } 


//Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
//Indique o status com base no valor do IMC.

// let peso = 75;
// let altura = 1.65;
// let imc = peso / altura * altura;

// if (imc <= 16.9 ){
//     console.log("Seu IMC é de: " + imc.toFixed(2) + " e você está muito abaixo do peso");
// } else if (imc >= 17 &&   imc <= 18.4) {
//     console.log("Seu IMC é de: " + imc.toFixed(2) + " e você está abaixo do peso");
// } else if (imc >= 18.5 && imc <= 24.9){
//     console.log("Seu IMC é de: " + imc.toFixed(2) + " e você está no peso ideal");
// } else if (imc >= 25 && imc <= 29.9){
//     console.log("Seu IMC é de: " + imc.toFixed(2) + " e você está acima do peso");
// } else if (imc >= 30 && imc <= 34.9){
//     console.log("Seu IMC é de: " + imc.toFixed(2) + " e você está na Obesidade Grau I");
// } else if (imc >= 35 && imc <= 40){
//     console.log("Seu IMC é de: " + imc.toFixed(2) + " e você está na Obesidade Grau II");
// } else {
//     console.log("Seu IMC é de: " + imc.toFixed(2) + " e você está na Obesidade Grau III");
// }

//Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!

// numeroA = 3;
// numeroB = 4;

// console.log(a < b); 
// console.log(a > b);


// if (a > b){
//     console.log("O numero " + a + "é maior que " + b);
// } else if (a < b){
//     console.log("O número " + a + "é menor que " + b);
// } else if (a === b){
//     console.log("Os números são iguais");
// } else{
//     console.log("Digite um número válido");
// }


/*Crie duas variáveis: salário e quantidadeDependentes. 
Siga a seguinte regra para aplicar ajustes salariais: 
Caso não possua dependentes não realizar ajustes no salário, 
se houver entre 1 e 5 aumentar em 30% o salário.
 Caso seja acima de 5 aumentar em 40% o salário.*/


let salario = 1000; // Exemplo de salário
let quantidadeDependentes = 3; // Exemplo de quantidade de dependentes
let novoSalario;

if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    novoSalario = salario * 1.30; // Aumento de 30%
    console.log("Seu salário é de " + novoSalario);
} else if (quantidadeDependentes > 5) {
    novoSalario = salario * 1.40; // Aumento de 40%
    console.log("Seu salário é de " + novoSalario); 
} else {
    console.log("Seu salário é de " + salario);
}

//Crie uma variável para armazenar um dia da semana 
//(1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.

// let dia = 3

// if (dia == 1 || dia == 7){
//     console.log("Esse dia é final semana");
// } else if (dia > 2 && dia <= 5) {
//     console.log("Esse dia é dia útil");
// } else {
//     console.log("Por favor, digite um número de 1 a 7");
// }


/*6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.*/

ano = 2002;
if (ano % 4 == 0  && ano % 100 == !0){
    console.log("Este ano é bissexto")
}else if (ano % 400 == 0){;
    console.log("Este ano também é bissexto");
}else{
    console.log("Este ano não é bissexto");
}


/* Crie uma variável idade. 
Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.
*/

let idade = 234;
idade = 234;
if (idade < 0 || idade > 130){
    console.log("Digite uma idade válida. ");
} else {
    console.log("Sua idade é: " + idade);
}

/*Crie uma variável com o turno de aula: 
M-matutino ou V-Vespertino ou N- Noturno. 
Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */

let turnodaAula = m;

turnodaAula = n;

if (turnodaAula === 'm'){
    console.log("Bom dia!");
} else if (turnodaAula === 'v') {
    console.log("Boa tarde!");

} else if (turnodaAula === 'n') {
    console.log("Boa noite!");
}else {
    console.log("Valor Inválido!");
}
