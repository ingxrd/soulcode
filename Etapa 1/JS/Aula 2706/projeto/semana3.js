//Exercício 1
// Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

// numeros = [];
// retorno numerosPares = []

//1º passo: definir o nome da função.
//2º passo: definir o parâmetro da minha função. Neste caso, o parâmetro é: um array =)
//3º passo: criar uma lista para receber os números pares; irei usá-la em retorno
//4º passo: após essa estruturação da minha função, começo a trabalhar na lógica: usei o for of, para que ocorra uma verificação de todos os elementos do parâmetro array.
//5º passo: aplicação da lógica, que busca, através do operador modular, realizar a operação de verificação de par ou impar. se o número da minha array me retornar 0, signfiica que é par
//6º passo: se ele for par, será empurrado/guardado no array (atraves de numeroPares.push)
function verificarNumerosPares(array){ 
    numerosPares = [];
    for (let num of array){
        if (num % 2 === 0){
            numerosPares.push(num);
        }
    }
    return numerosPares
}
let numerosparaVerificacao = [1,2,3,4,5,6,7,8,9,0];
let verificarNumeros = verificarNumerosPares(numerosparaVerificacao);
console.log(`Os números pares são: ${verificarNumeros}`);


//Exercício 2
//Escreva uma função que receba um array de números e retorne a soma de todos os números.
// Usei o loop para passar pelos valores que inseri em "calcularSoma". Conforme ele vai passando pelos valores, vai somando, até o último elemento. Depois, ele retorna a soma total. Por isso eu usei calcularSoma = nums [contador] + calcularSoma. Eu pensei que seria algo como: "vou pegar o que tiver inserido e fazer uma soma, até o o último elemento"
function somaNumeros (nums){
    let calcularSoma = 0;
    for (let i = 0; i < nums.length; i++){
        //calculadoraSoma = numeros[i] + calculadoraSoma
        calcularSoma += nums[i];
    }

    return calcularSoma
}

let numerosParaSoma = [3,4,5];
let realizandoSoma = somaNumeros(numerosParaSoma);
console.log(`Resultado da soma: ${realizandoSoma}`);

// Exercício 3
//Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
//Para verificar se uma string é um palíndromo, preciso invertê-la. Para isso, usarei os métodos split("").reverse().join(""); Em seguida, verificarei se a string possui o mesmo valor estando normal e invertida. Caso isso seja verdadeiro, ela é um palíndromo.

function verificarPalindromo (string){
    let stringPalindromo = [];

    for (let i = 0; i < string.length; i++){ // sintaxe para percorrer cada palavra da minha array testandoPalindromo
        let palavra = string[i]; //acessando cada palavra de string...
        if (palavra.split("").reverse().join("") === palavra){
            stringPalindromo.push(palavra);
            console.log(`A palavra ${palavra} é um palíndromo.`)
        }
    }
    
    return stringPalindromo;    

}

let testandoPalindromo = ["arara", "ingrid", "radar", "ovo", "soul", "code"];
let verificandoPalindromo = verificarPalindromo(testandoPalindromo);

//Exercicio 5
//Escreva uma função que receba um array de números e retorne o menor número do array.
//É muito parecido com a lógica do exercício que a gente fez. Basicamente, irei trabalhar com a ideia de comparação entre os números, isto é, o número no index 0 é menor que o numero do index 1? assim suscetivamente, até o final. Posteriormente, irei imprimir o menor número em questão.
function verificarMenorNumero(numeros) {
    let menor = numeros[0]; //indica que irá começar no index 0, para realizar a comparação

    for(let i = 1; i < numeros.length; i++) {
        if(numeros[i] < menor) { //se o número for menor que menor
            menor = numeros[i]; // contabilizo 
        }
    }   
    return menor;
}

let num = [-100,2,3,4,0, -10, -20]
let verificar = verificarMenorNumero(num);
console.log(`O menor número é: ${verificar}`);


//Exercicio 8
//Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
//A lógica: eu pensei em dividir o e-mail em dois, tudo que vai antes de @ e depois dele. O [0] aponta justamente a 1ª parte do e-mail, porque representa o index da array que surge com esse split. Dessa forma, eu consigo aplicar o asterisco na primeira parte, usando replace. Se eu colocar [1], por exemplo, ele irá retornar ingrid@***, porque refere-se ao outro 1 da array.

    function codificandoEmail (email){
        let emailSplit = email.split("@")[0]; 
        let emailCodificado = email.replace(emailSplit, "***");
        return emailCodificado;
    }

let testandoEmail = "ingrid@dev.com";
let codificandoTesteEmail = codificandoEmail(testandoEmail);
console.log(`O seu e-mail codificado: ${codificandoTesteEmail}`);