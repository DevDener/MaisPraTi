let serie = {
    nome: "The Boys",
    genero: ["Ação, Paródia, Heróis"],
    nrTemporadas: 4,
    classificacao: "+18",
    nrEpisodios: {
        temp1: 10,
        temp2: 10,
        temp3: 50,
    },

    mostrarCaracteristicas: function(){
        return ("O nome da série é " + this.nome + " e sua classificação é " + this.classificacao + ".")
    }
}

console.log(serie.mostrarCaracteristicas())

// let book = {
//     title: "Diary of a wimpy kid",
//     characteristics: ["Hardcover", "funny", "drawings", "young literature"],
//     gender: "Comedy",
//     numPages: 224,
//     classification: "+8",
//     author: "Jeff Kinney",
//     readingStatus: "Read",
//     leanguage: "portuguese",

//     mostrarCaracteristicas: function(){
//         return ("O nome do livro é " + this.title + " e sua classificação é " + this.classification + ".")
//     }
// }

// console.log(book.mostrarCaracteristicas())

// let car = {
//     brand: "Chevrolet",
//     model: "Cobalt",
//     maxVelocity: "200",
//     year: 2015,

//     mostrarCaracteristicas: function(){
//         return ("O modelo do carro é " + this.model + ", da marca " + this.brand + ".")
//     }
// }

// console.log(car.mostrarCaracteristicas())


// // função construtora

// function computador(processador, gpu, ram, armazenamento){
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function() {
//         return (`O ${this.processador} está funcionando`)
//     }

//     this.mostrarEspecificacoes = function() {
//         return (`processador: ${processador}
//             gpu: ${gpu}
//             ram: ${ram}
//             armazenamento: ${armazenamento}`)
//     }
// }

// let computer = new computador("r5 3600", "rtx 2060", "16GB", "500GB SSD")

// console.log(computer.ligar())




// function jogos(titulo, genero, anoLancamento, empresa){
//     return{
//         titulo,
//         genero,
//         anoLancamento,
//         empresa
//     }
// }

// let jogo1 = jogos('Final Fantasy', 'RPG', '1997', 'Square Soft')

// console.log(jogo1)

// for(let key in jogo1){
//     console.log(`${key}: ${jogo1[key]}`)
// }


// const jogadores = [['Pelé', 'CR7', 'Neymar']]


// for(let jogador of jogadores){
//     console.log(jogador)
// }


// for(let chave in jogadores){
//     console.log(chave)
// }



// const NOME = 'Silva'

// for(let char in NOME){
//     console.log(char)
// }