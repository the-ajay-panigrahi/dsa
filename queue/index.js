/*
 Queue is a FIFO (First In First Out) data structure:

First element added is the first one removed.

Think of a line at a movie theater: people join at the back and leave from the front.
*/
class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(data) {
        this.queue.push(data)
    }

    dequeue() {
        if (this.isEmpty()) {
            return "This Queue is Empty!"
        }
        return this.queue.shift()
    }

    isEmpty() {
        return this.queue.length === 0
    }

    peek() {
        if (this.isEmpty()) {
            return "This Queue is Empty!"
        }
        return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    clear() {
        this.queue = []
    }

    printQueue() {
        let str = ""
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + "\n"
        }
        return str
    }
}

// usage example
let myQueue = new Queue()
console.log(myQueue.queue);
console.log(myQueue.isEmpty());
console.log(myQueue.size());
console.log(myQueue.peek());
console.log(myQueue.dequeue());

console.log("---------------");


myQueue.enqueue(23)
myQueue.enqueue(0)
myQueue.enqueue(66)
myQueue.enqueue(34)
myQueue.enqueue(55)
myQueue.enqueue(-27)
myQueue.enqueue(9)
myQueue.enqueue(100)

// console.log(myQueue.dequeue());


console.log(myQueue.queue);
console.log(myQueue.isEmpty());
console.log(myQueue.size());
console.log(myQueue.peek());
// console.log(myQueue.dequeue());

console.log("---------------");

console.log(myQueue.printQueue());
myQueue.clear()
console.log(myQueue.printQueue());
console.log(myQueue.size());
