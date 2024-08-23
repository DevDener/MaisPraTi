//<Variável>; <condicao>; <incremento>

// const prompt = require('prompt-sync')()

// let multiplier = Number(prompt('Informe o número que você quer saber a tabuada: '))

// for(let counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} =`, multiplier * counter)
// }


//Imprimir os valores pares entre 1 e 20

// for(let i = 0; i <= 20; i += 2){
//  console.log(i)   
// }


//Calcular a soma dos números de 1 a 100
// let sum = 0
// for(let j = 1; j <= 100; j += 1){
//     sum += j
// }

// console.log(sum)


//Imprimam os valores de 1 até 10 em ordem decrescente.
// for(let k = 10; k >= 1; k -= 1){
//     console.log(k)
// }



// let i = 10
// while(i > 0){
//     console.log(i)
//     i--
// }


//Calcular a soma dos números de 1 a 100.
// let sum = 0
// let i = 0
// while(i < 100){
//     i += 1
//     sum += i
// }

// console.log(sum)
// OU
// let sum = 0

// for(let i = 1; i <= 100; i++){
//     sum += i
// }

// console.log(sum)


//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// let num1 = Number(prompt('Insira um número: '))
// let counter = 0
// let sum = 0

// while(num1 !== 0){
//     sum += num1
//     counter++
//     num1 = Number(prompt('Digite outro número: '))
// }

// console.log('A média aritmética é: ', sum/counter)


//Pedir números ao usuário até que o número seja negativo

// let num1

// do{
//     num1 = Number(prompt('Insira um número: '))
// } while(num1 >= 0)


//Calculadora Simples

// const prompt = require('prompt-sync')()

// let continuar

// do{
//     console.clear()
//     let num1 = Number(prompt('Digite um número: '))
//     let num2 = Number(prompt('Agora, digite outro número: '))
//     console.log('1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação\n')
//     let option = Number(prompt('Digite o número da operação desejada: '))
//         switch(option){
//             case 1:
//                 console.log(`${num1} + ${num2} =`, num1 + num2)
//                 break
//             case 2:
//                 console.log(`${num1} - ${num2} =`, num1 - num2)
//                 break
//             case 3:
//                 if(num2 != 0){
//                     console.log(`${num1} / ${num2} =`, num1 / num2)
//                 } else {
//                     console.log('ERRO: Impossível dividir por 0!')
//                 }
//                 break
//             case 4:
//                 console.log(`${num1} * ${num2} =`, num1 * num2)
//                 break
//             default:
//                 console.log('Opção inválida!')
//                 break
//         }

//     continuar = prompt('Deseja fazer uma nova conta? (Digite S para Sim e N para Não) ')
// } while(continuar == 'S' || continuar == 's')
