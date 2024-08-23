// EX1

let thingsList = Array()

thingsList['hardware'] = Array()
thingsList['fruits'] = Array()
thingsList['People'] = Array('Aristóteles', 'Tolkien')

thingsList['hardware'][0] = 'Notebook'
thingsList['hardware'][1] = 'Mouse'
thingsList['hardware'][2] = 'Teclado'
thingsList['fruits'][0] = 'Laranja'
thingsList['fruits'][1] = 'Maçã'

console.table(thingsList)



//EX2

// let fruitsList = Array()

// fruitsList[0] = 'Maça'
// fruitsList[1] = 'Melancia'
// fruitsList[2] = 'Banana'
// fruitsList[3] = 'Abacaxi'
// fruitsList[4] = 'Uva'
// fruitsList[5] = 'Morango'

// console.log(fruitsList.sort())

// let index = fruitsList.indexOf('Morango')

// if(index === -1){
//     console.log('O elemento não existe.')
// } else {
//     console.log(`O elemento existe e está na posição ${index}.`)
// }


// EX3

// let numberList = []

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 0
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort((a, b) => a - b))



// EX4
// Aqui eu crio uma função e deixo ela preparada para que, quando eu puxe ela, tal qual na linha 67, ela realize o cálculo de acordo com os parâmetros que declarei.

// function calculateLandArea(num1, num2) {
//     let area = num1 * num2
//     return area
// }

// let largura = 10
// let altura = 200

// let area = calculateLandArea(largura, altura)

// console.log(`A área possui ${area} metros quadrados`)



// EX5 (Feito por mim)

function organizarNums(num) {
    let numOrganizado = num.sort((a, b) => a - b)
    return numOrganizado
}

let numberList = []

numberList[0] = 10
numberList[1] = 12
numberList[2] = 0
numberList[3] = 16
numberList[4] = 7
numberList[5] = 9

let organizado = organizarNums(numberList)

console.log(organizado)



// EX6 (Feito por mim)

const prompt = require('prompt-sync')()

function ehPar(numTeste){
    let teste = numTeste % 2 == 0
    return teste
}

let num = Number(prompt('Digite um número e descubra se ele é inteiro: '))

let resultado = ehPar(num)

console.log(resultado)