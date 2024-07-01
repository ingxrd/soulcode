// EXERCICIO 1 
//Faça a tabuada completa utilizando o loop for:


//for 

/*
for (let a = 1; a <= 10; a++){
    for(let numero = 1; numero <=10; numero++){
        console.log(a + " x " + numero + " = " + a * numero  );
    }

}
*/

//EXERCICIO 2 
//Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo. A sequência de Fibonacci é formada pela sequência: 0,1,1,2,3,5,8,13,21,34,55.
numeroAtual = 0;
numeroAnterior = 1;



//EXERCICIO 3 
//Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).
//(inicialização; condição; atualização)

for(let n1 =10; n1 >=1; n1--){
    console.log(n1);
}

// EXERCICIO 4
//Faça um programa que calcule o fatorial de um número inteiro. Ex.: 5! = 5 x 4 x 3 x 2 x 1 = 120.

let resultadoFatorial = 1;
let numeroTeste = 5;
for(let i =numeroTeste; i>= 1; i--){
    resultadoFatorial *= i;

}
console.log(resultadoFatorial)

// EXERCICIO 5
//Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.

let quantidade = 0;
for (let c = 1; c <= 100; c++){
    if (c % 7 === 0){
        console.log(c + " é divisível por 7.")
        quantidade++;
    }
}


//EXERCICIO 6
//Mostre a soma do 50 até o número 100 usando loop for.
let soma = 0; // Inicializa a variável para acumular a soma

for (let numero = 50; numero <= 100; numero++) {
    soma += numero; // Adiciona o número atual à soma
}

console.log("A soma dos números de 50 até 100 é:", soma);

//EXERCICIO 7
//Mostre a seguinte figura com utilização de laços:
//(inicialização; condição; atualização)
//*
//**
//***
//****
//***** << 