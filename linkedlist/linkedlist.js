class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

// Insert at the beginning
LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data)
    this.head = newNode
}

// Insert at the End
LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data)

    // !this.head
    if (this.head === null) {
        this.head = newNode
        return
    }

    let last = this.head

    // last.next
    while (last.next !== null) {
        last = last.next
    }

    last.next = newNode
}

// Insert at a given node
LinkedList.prototype.insertAfter = function (prevNode, data) {
    if (!prevNode) {
        console.log("The given previous node cannot be null");
        return
    }

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}

// Delete First Node/ Head
LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return
    }
    this.head = this.head.next
}

// Delete Last Node (get to second last node)
LinkedList.prototype.deleteLastNode = function () {
    // If no head (!this.head)
    if (this.head === null) {
        return
    }
    // If only head exists(one node only) 
    else if (this.head.next === null) {
        this.head = null
        return
    } else {
        let secondLast = this.head
        while (secondLast.next.next) {
            secondLast = secondLast.next
        }
        secondLast.next = null
        return
    }
}

// Delete a Node with a given Key
LinkedList.prototype.deleteNodeAtKey = function (key) {
    // If no head (!this.head)
    if (this.head === null) {
        return
    }
    else if (this.head.data === key) {
        this.head = this.head.next
        return
    } else {
        let currentNode = this.head
        while (currentNode.next !== null) {
            if (currentNode.next.data === key) {
                currentNode.next = currentNode.next.next
                return
            }
            currentNode = currentNode.next
        }
    }
    console.log("No node found with key: ", key);
    return
}