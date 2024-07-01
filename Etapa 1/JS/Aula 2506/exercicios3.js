//EXERCICIO 7

for (let linha = 1; linha <= 5; linha++) {
    let asteriscos = '';
    for (let i = 1; i <= linha; i++) {
        asteriscos += '*';
    }
    console.log(asteriscos);
}


//EXERCICIO 4
let fatorial = 1; //estabeleco que vai começar do 1
let numeroTeste = 5; // teste
for(let i =numeroTeste; i>= 1; i--){ //i recebe o numero; i tem que ser igual = 1, i vai diminuir em 1.
    fatorial *= i; // fatorial é fatorial * contador

}
console.log(fatorial);


let soma = 0; // Inicializa a variável para acumular a soma

for (let numero = 50; numero <= 100; numero++) {
    soma += numero; // Adiciona o número atual à soma
}

console.log("A soma dos números de 50 até 100 é:", soma);