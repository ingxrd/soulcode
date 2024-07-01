/*1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.*/

//array nome dos alunos

    function chamadaTurma (nomeAlunos,alunosPresentes){
        let faltantes = [] //lista de alunos ausentes, eu vou retornar ela só no final de tudo!
        for (let i = 0; i < nomeAlunos.length; i++ ){ //loop que vai ficar passando por toda a lista de alunos
            if (!alunosPresentes.includes(nomeAlunos[i])){        // A ideia é verificar se o nome do aluno 1, aluno 2 (até o último aluo) NÃO está incluído na lista de alunos presentes
                faltantes.push(nomeAlunos[i]); // empurre o nome do aluno para 'faltantes'
            }
        }
    return faltantes

}  

let nomeAlunos = ["Ingrid", "William", "Amanda", "Bruno", "Carlos"] //chamando o meu parâmetro. 
let alunosPresentes = ["Ingrid", "William"] // dizendo quais foram os alunos presentes.
let faltantes = chamadaTurma(nomeAlunos,alunosPresentes);
console.log(faltantes)



//O que eu preciso saber para fazer uma chamada da turma? 1) o nome do alunos da turma inteira 2) nome dos alunos que foram
// eu preciso receber a lista de alunos para saber quais são os alunos - ou seja, é um parâmetro pq eu preciso receber isso.
// eu preciso percorrer a lista de alunosPresentes para saber quem foi   // ou seja, é um parâmetro, eu preciso receber isso.
// eu preciso de uma lista de faltantes. // se eu coloquei alunos presentes como parâmetro, faz sentido eu receber um 
//eu preicos percorrer for

