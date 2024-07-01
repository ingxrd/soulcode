//1. Crie uma função arrow que recebe dois números e retorna o maior deles.

const verificarMaior = (a,b) => {
    if(a > b)  {
        console.log(`O número ${a} é maior.`);
    } else {
        console.log(`O número é ${b} é maior.`);
    }
}

let teste = verificarMaior(4,10)
let teste2 = verificarMaior(-12, 0)


//2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

const palavras = (str) => {
    let arrayPalavras = [];
    str.split(' ').forEach((palavra) => {
        let palavraMaiuscula = palavra.charAt(0).toUpperCase() + palavra.slice(1);
        console.log(palavraMaiuscula);
        arrayPalavras.push(palavraMaiuscula);
    });
    return arrayPalavras;
}

let resultado = palavras("oi");
console.log(resultado);

//3. Use map para transformar um array de números, multiplicando cada número por 5.

const numeros = [3,6,9]
const multiplicandoPorCinco = numeros.map((n) => n*5)
console.log(multiplicandoPorCinco)


//4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.

const idades = [5,10,15,20,25,18]
const maioresIdade = idades.filter((idades) => idades >= 18);
console.log(`Maiores de idade: ${maioresIdade}` )

//5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.

const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K Rowling",
    infospublicacao: {
        editora: "Rocco",
        anoPublicacao: "1997",
    }
}

console.log(`Editora: ${livro.infospublicacao.editora}`);


const serieHarryPotter = {
    titulo: [
        {nome: "Harry Potter e a Câmara Secreta", autor: "J. K Rowling"},
        {nome: "Harry Potter e o Prisioneiro de Azkaban", autor: "J. K Rowling"},
        {nome: "Harry Potter e o Cálice de Fogo", autor: "J. K Rowling"},
    ],
    autor: "J.K Rowling", 
    infosPublicacao: [
        {editora: "Rocco", anoPublicacao: "1997"},
        {editora: "Rocco", anoPublicacao: "1997"},
        {editora: "Rocco", anoPublicacao: "1997"},
    ]
}

for(let info of serieHarryPotter.titulo){
    console.log("Títulos: ", info.nome);
}
//6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.

const frutas  = ["Amora", "Banana", "Caju", "Damasco"];
let primeiraPalavra = frutas[0];
let segundaPalavra = frutas[1];
console.log(`A primeira palavra é: ${primeiraPalavra}.\nA segunda palavra é: ${segundaPalavra}`);

//ou

const frutas1 = ["Manga", "Morango", "Toranja", "Laranja"];
let [primeiraFruta, segundaFruta] = frutas1;
console.log(`A primeira fruta é: ${primeiraFruta}.\nA segunda fruta é: ${segundaFruta}`);