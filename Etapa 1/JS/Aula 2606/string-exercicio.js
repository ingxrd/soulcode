let ola = "hello";
for (let i = ola.length - 1; i >= 0; i--){
    console.log(ola[i]);
}

let inverter = "Olá";
let palavraInversao = inverter.split("").reverse().join("");
console.log(palavraInversao);

//uma variável que armazena uma frase, e utilize as funcionalidades de 
//string para remover uma palavra específica da frase e trocar por "###"

let frase = "Mundo";
console.log(frase.replaceAll("Mundo","###"));

//Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com
let email = "ingrid@soulcode.com"

if(email.includes("soulcode")) {
    console.log("O domínio do e-mail é soulcode.com");
} else {
    console.log("O domínio do email não é soulcode.com");
}
