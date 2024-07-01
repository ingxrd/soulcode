/*
    for = sequencias
    while: repetição indefinida

    for (inicialização; condição; atualização) {
        // código que sera repetido
    }

*/
//vai iniciar aonde? vai contar até quando? vai somar a atualização em qual variável?
//vai imprimir do 0 ao 10.

/*
for (let cont = 0; cont < 10; cont++){
    console.log(cont);
}

//esse for vai ir de 5 em 5 até mil
for (let cont =0; cont <= 1000; cont += 5 ){
    console.log(cont); 
}
*/ 

/*
// se eu quiser diminuir de 1000 até 0, eu faça aquassim:
for(let cont = 1000; cont >=0 ; cont--){
    console.log(cont);
}
*/

//exercicios laço for
//imprimir na tela de 2 a 10

//normalmente a variavel no for é 1 letra, como c ou i
/*inicialização: vou começar no 2, pq é do 2 até o 10
condição;  é pra ir até o 10
atualização = atualizando o C de 2 em 2 */

/*
for(let c = 2; c <=10; c+= 2){
    console.log(c);
} 
*/ 

//tabuada do 7
/*inicialização: 1, pq vou começar 1x7...
condição; vou parar no 10!
atualização vou salvar o c*/

/*let n = 3 // variavel (posso mudar pra tabuada q quiser)
for(let c = 1; c <= 10; c++ ){
    console.log(`${n} x ${c} = ${n*c}`);
}*/

/*let soma = 0;
for(let c = 1; c <= 999; c++){
    if(c % 2 !== 0){
        soma = soma + c;
    }
}
console.log("Soma dos ímpares: " + soma);

*/
//4. são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.

/*
let qnt = 0;
for (let c = 1; c <= 1000; c++){
    if (c % 9 === 0){
        console.log(c + " é divisível por 9.")
        qnt++;
    }
}

console.log("Total: " + qnt);

*/

//Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.
 
// inicialização:  c = 1 - vai comear no 1
// condição: até 1.000
// atualização: 

for (let c = 1; c <= 1000; c++) {
    if (c % 9 == 0){

    }

    // código que sera repetido
}
