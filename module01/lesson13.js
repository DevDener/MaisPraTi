let professor = {
    nome: "Carlos",
    disciplina: "Cálculo A",
    grade: {
        joao: 7.5,
        dener: 8.0,
        marcio: 3.2,
        marcelo: 8.8,
        luiza: 9.0,
        chiquinho: 10.0,
        lua: 0.0

    }
}

let soma = 0;
let quantidadeDeAlunos = 0;

for(let aluno in professor.grade) {
    soma += professor.grade[aluno]; // Soma a nota do aluno à variável soma
    quantidadeDeAlunos++; // Conta mais um aluno
}

// Calcula a média das notas
// let media = soma / quantidadeDeAlunos;

// // Verifica se a média está acima ou abaixo de 6.0
// if (media >= 6.0) {
//     console.log("A turma está acima da média de aprovação.");
// } else {
//     console.log("A turma está abaixo da média de aprovação.");
// }


// const library = [
//     {title: 'O Hobbit', author: 'J. R. R. Tolkien'}
// ]