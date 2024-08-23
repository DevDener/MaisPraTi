// 1. Soma dos elementos de um Array

// let sum = 0
// let arr = [10, 20, 30, 40]

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum)


// 2. Encontre o Maior Número em um Array

//  let arr = [10, 20, 30, 40]
//  let max = arr[0]

// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > max) {
//         max = arr[j];
//     }
// }

// console.log(max)


// 3. Reverter um Array

// let reversed = []

// for(let k = arr.length -1; k>= 0; k--){
//     reversed.push(arr[k])
// }

// console.log(reversed)


// 4. Crie um novo Array contendo apenas os números pares

// let arr = [11, 20, 33, 40]
// let evens = []

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         evens.push(arr[i])
//     }
// }

// console.log(evens)


// 5. Contar ocorrências de um valor

// let vet = [10, 20, 20, 30, 30, 30, 40]
// let value = 10
// let count = 0

// for(i = 0; i < vet.length; i++){
//     if(vet[i] == value){
//         count++
//     }
// }

// console.log(`O valor ${value} ocorre ${count} vezes no vetor`)


// Arrays/Vetores multidimensionais


let matriz1 = [ //declarando a primeira matriz
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let matriz2 = [ //declarando a segunda matriz
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let resultado = [] //declarando a terceira matriz, que seria o resultado

if(matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length){ 
    throw new Error('Os arrays devem ter o mesmo tamanho.')
}

for(i = 0; i < matriz1.length; i++){
    let somalinha = []
    for(j = 0; j < matriz2[i].length; j++){
        somalinha.push(matriz1[i][j] + matriz2[i][j])
    }
    
    resultado.push(somalinha)
}

console.table(resultado)