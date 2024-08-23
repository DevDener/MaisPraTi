// let teste = function() {
//     console.log('Olá mundo!')
// }

// teste()

// function showFunction(successCallback, errorCallback) {
//     if(true){
//         successCallback("Requisição bem sucedida!")
//     } else {
//         errorCallback("Erro na requisição")
//     }
// }

// let successCallback = function(message) {
//     console.log(message)
// }

// let errorCallback = function(message) {
//     console.log(message)
// }

// showFunction(successCallback, errorCallback)

// 1. Soma dos Elementos de um Array

function sumElements(sumTotal){
    let sum = 0
    let arr = [10, 20, 30, 40]

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    sumTotal(sum)
}

let sumTotal = function(number) {
    console.log(number)
}

sumElements(sumTotal)


//2. Encontre o Maior Número em um Array



//3. Reverter um Array



//4. Criem um novo array contendo apenas os números pares



//5. Contar Ocorrências de um Valor



// Matemáticos

console.log(Math.ceil(100.73)) // arredonda pra cima
console.log(Math.floor(100.73)) // arredonda pra baixo
console.log(Math.round(100.73)) // a partir de 100.5 arredonda pra cima, caso contrário, arredonda pra baixo
console.log(Math.sqrt(100)) // raíz quadrada
console.log(Math.pow(100, 2)) // potência
console.log(Math.random()) // randomizar numero

// datas

let date = new Date()

console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
console.log(date.getDate() + "/" + date.getMonth() + 1  + "/" + date.getFullYear())


// Inverter uma string

function reverseString(str) {
    let reversed = ''
    
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    
    return reversed;
}

let nome = 'Dener'
let reversedString = reverseString(nome)

console.log(reversedString)


// contar vogais

function vogalCounter() {
    let vogal = [a, e, i, o, u]

}


// gerar número aleatório




// dias entre duas datas




// formatar data

