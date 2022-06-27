/*
Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), 
 nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso 
método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/

let Aluno = require('./aluno');

let Curso = {
    nomeCurso: 'JavaScript',
    notaAprovacao: 7,
    faltasMaxima: 4,
    estudantes: [],
    adicionarAluno: (nome, faltas, notas) => {
        Curso.estudantes.push(new Aluno(nome, faltas, notas))
    },
    mediaNotaAlunos: obj => {
        let arrayMedias = obj.map(e => e.calcularMedia());
        let somaMedias = 0;
        for (let i = 0; i < arrayMedias.length; i++) {
            somaMedias += arrayMedias[i] / arrayMedias.length;
        };
        console.log(`A média total de notas dos alunos é ${somaMedias.toFixed(2)}.`);
    },
    adicionarFalta: (obj, nome) => {
        let aluno = obj.filter(e => e.nome == nome);
        console.log(`O aluno ${nome} tem ${aluno[0].faltas} falta(s).`)
        aluno[0].adiconarFaltas()
        console.log(`Adicionada falta para o aluno ${nome}. Número de falta(s) atual: ${aluno[0].faltas}.`)
    }
};

module.exports = Curso;