/*
 Stack is a special type of data structure that follows the LIFO (Last In, First Out) principle.
 It is similar to an array, but we control how values are added and removed — only from one end.
*/

class Stack {
    constructor() {
        this.stack = []
    }
    push(data) {
        this.stack.push(data)
    }

    pop() {
        this.stack.pop()
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }

    size() {
        return this.stack.length
    }

    clear() {
        this.stack = []
    }

    contains(data) {
        return this.stack.includes(data)
    }

    reverse() {
        this.stack.reverse()
    }

    printStack() {
        let str = ""
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n"
        }
        return str;
    }
}

// usage example
let myStack = new Stack()
// console.log(myStack);
// console.log(typeof myStack);
// console.log(Array.isArray(myStack.stack));
// console.log(myStack.stack);
// console.log(myStack.size);
// console.log(myStack.size());
// myStack.push(23)
// myStack.push(6)
// myStack.push(77)
// myStack.push(45)
// myStack.push(148)
// myStack.push(-33)
// myStack.push(439)
// console.log(myStack.size());
// console.log(myStack.stack);
// myStack.pop()
// console.log(myStack.size());
// console.log(myStack.stack);
// console.log(myStack.printStack());
