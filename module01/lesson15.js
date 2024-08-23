class Node {
    constructor(data) {
        this.data = data
        this.next = null 
        this.previous = null 
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null // representa o primeiro nó da lista
        this.tail = null // representa o último nó da lista
        this.size = 0 // representa o tamanho da lista
    }

    add(data) {
        let newNode = new Node(data)

        if(this.head === null) {
            this.head = newNode
            this.tail = newNode 
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.size++
    }

    insertAt(data, index) {
        if(index < 0 || index > this.size) {
            return console.error('Index fora dos limites!')
        }

        let newNode = new Node(data)
        let current = this.head

        if(index === 0) {
            if(this.head === null){
                this.head = newNode
                this.tail = newNode 
            }
        }
    }

    removeAt(data, index) {
        if(index < 0 || index >= this.size) {
            return console.error('Index fora dos limites!')
        }

        let current = this.head

        if(index === 0) {
            this.head = this.head.next

            if(this.head === null) {
                this.head.previous = null
            } else {
                this.tail = null
            }
        }   else if(index === this.size -1) {
            this.tail = this.tail.previous
            this.tail.next = null
        } else {
            for(let i = 0; i < index; i++) {
                current = current.next
            }

            current.previous.next = current.next
            current.next.previous = current.previous
        }
    }

    getData(index) {
        if(index < 0 || index >= this.size) {
            return console.log('Index fora dos limites!')
        }

        let current = this.head

        for(let i = 0; i < index; i++) {
            current = current.next
        }

        return current.data
    }

    print(){
        let current = this.head
        let result = []

        while(current !== null) {
            result.push(current.data)
            current = current.next
        }

        console.log(result.join(' <=> '))
    }
}

let lista = new DoublyLinkedList()

lista.add(10)
lista.add(20)
lista.add(30)
lista.add(40)
lista.add(50)

lista.print()

lista.insertAt(5, 0)
lista.insertAt(15, 3)
lista.insertAt(55, 3)
lista.print()