// const prompt = require('prompt-sync')()

// const year = Number(prompt('Digite um ano para saber se ele é bissexto: '))

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`${year} é um ano bissexto.`)
// } else {
//     console.log(`${year} não é um ano bissexto.`)
// }

// let count = 0
// let num = 101

// do {
//     for(let i = 1; i <= num; i++){
//         if(num % i == 0) {

//         }
//     } 
// }


// let carros = Array()

// carros['Volks'] = 'Gol', 'Fusca'
// carros['Chevrolet'] = 'Cobalt' 
// carros['Fiat'] = 'Siena'

// console.log(carros)



let livros = ['Senhor dos anéis', 'O Hobbit', 'Harry Potter']

// livros.push('Sherlock Holmes')
// livros.unshift('1984')
// livros.pop(2)
livros.splice(2, 1, 'Animais Fantásticos')

console.log(livros)