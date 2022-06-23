/*
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e 
notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá 
um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
*/


class Aluno {
    constructor(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
        this.calcularMedia = () => {
            let media = this.notas.reduce((acc, cur) => {
                return acc + cur;
            });
            media = media / this.notas.length;
            return media;
        };
        this.adiconarFaltas = () => {
            this.faltas++;
        }
    };
};

module.exports = Aluno;