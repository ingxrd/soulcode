//Use um laço while para imprimir na tela todos os números pares de 2 a 10.

/*let soma = 2;

while (soma <=10){
    soma +=2;
    console.log(soma)
}
*/

//Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
//7 x 1 = 7
/*let resultado = 7;
let i = 1;

while (i <= 10){
    resultado =+ resultado //aqui é o resultado da multiplicação 
    i ++ //aqui eu to iterando o numero que se´ra multiplicação
    console.log(i + " x " + resultado +" = " + (i*resultado)); 

}
*/
//("x " + numero "=" + resultado)

//i =  1,2,3,4,5,6,7,8,9 e 10


//Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

/*let soma = 0;
let numero = 1;
while (numero <= 999){
    if (numero % 2 == 1){
        soma+= numero // soma = numero + soma 
    }
    numero++; //iteração do numero = numero = numero + numero
}
console.log("Soma dos números ímpares: " + soma)*/

//Crie um programa que conta quantos números entre 1 e 1000 
//são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.

let soma9 = 0;
let numero = 1;

while (numero <= 1000) {
    if (numero % 9 === 0) {
        console.log(numero + " é divisível por 9.");
        soma9++;
    }
    numero++;
}

console.log("Total de números divisíveis por 9: " + soma9);
