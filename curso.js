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
    }
};

module.exports = Curso;