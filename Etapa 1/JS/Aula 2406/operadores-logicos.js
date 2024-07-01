/*
    Operadores lógicos -> boolean
    && -> E (AND)
    || -> (OR)
    ! -> (NOT)
*/


//AND (&&)
//console.log(true); 
//console.log(false);

//console.log(true && true); //VERDADEIRO
//console.log(true && false); //VERDADEIRO 
//console.log(true && true && true && false); // FALSO - BASTA 1 FALSO PRA TUDO SER FALSO
//console.log(false && true); //false


////OR (||)
//console.log(true || true); //true
//console.log(true || false); //true
//console.log(true || false || false || false); //tem 1 true, é verdadeiro
//console.log(false || false); //falso,só da pra ser falso no true qnd tudo é falso

//NOT (!)
//console.log(!true); //false
//console.log(!false); //true

//Ordem ! > %% > || 
//console.log(!true || false); //false
//console.log(true || true && false);  //true
//console.log(!false && true || false); //trie

//let idade = 80;
//checar: Idade 18 e 59 anos
//console.log(idade >= 18 && idade <= 59); //checando se a pessoa tem mais de 18 anos

let media = 7.0;
let sabeIngles = true; //true = sabe e false = nao sabe
let aprovado = media >= 7.0;
