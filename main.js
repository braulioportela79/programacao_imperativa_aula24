/*
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e 
notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá 
um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), 
 nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso 
método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/


let Curso = require('./curso');

// Adicionar Alunos

Curso.adicionarAluno('Fernando Correa', 1, [10, 9, 9]);
Curso.adicionarAluno('Antonio Martins', 3, [6, 10, 5]);
Curso.adicionarAluno('Camila Gonçalves', 5, [3, 2, 5]);
Curso.adicionarAluno('Geraldo Botelho', 0, [10, 10, 10]);
Curso.adicionarAluno('Carlos Bretas', 1, [10, 7, 6]);
Curso.adicionarAluno('Ricardo Teixeira', 0, [8, 8, 8]);
Curso.adicionarAluno('Rafaela Martins', 2, [8, 10, 6]);
Curso.adicionarAluno('Ana Claudia', 0, [7, 3, 10]);
Curso.adicionarAluno('Bruno Cardoso', 1, [9, 6, 9]);
Curso.adicionarAluno('Thais Abreu', 4, [7, 10, 6]);

// Média dos Alunos

let mediaNotaAlunos = obj => {
    let arrayMedias = obj.map(e => e.calcularMedia());
    let somaMedias = 0;
    for (let i = 0; i < arrayMedias.length; i++) {
        somaMedias += arrayMedias[i] / arrayMedias.length;
    };
    console.log(`A média total de notas dos alunos é ${somaMedias.toFixed(2)}.`);
};

mediaNotaAlunos(Curso.estudantes);

// Adicionar Falta

let adicionarFalta = (obj, nomee) => {
    let aluno = obj.filter(e => e.nome == nomee);
    console.log(`O aluno ${nomee} tem ${aluno[0].faltas} falta(s).`)
    aluno[0].adiconarFaltas()
    console.log(`Adicionada falta para o aluno ${nomee}. Número de falta(s) atual: ${aluno[0].faltas}.`)
};

adicionarFalta(Curso.estudantes, 'Thais Abreu');