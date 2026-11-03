class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element;
        this.count++;

        return element;
    }

    // Return and remove top element in stack
    pop() {
        if (this.count == 0) {
            return undefined;
        }

        let deleteItem = this.items[this.count - 1];

        this.count--;
        this.items.pop();

        return deleteItem;
    }

    // Check top element in stack
    peek() {
        if (this.count == 0) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.count == 0;
    }

    // Return stack size
    size() {
        return this.count;
    }

    // Print elements in stack
    print() {
        let str = '';

        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }

        return str;
    }

    // Clear stack
    clear() {
        this.items = [];
        this.count = 0;

        return this.items;
    }
}

const stack = new Stack();

$(document).ready(function () {

    // Display stack elements
    function displayStack() {
        $("#stack").empty();

        for (let i = stack.count - 1; i >= 0; i--) {

            let block = $("<div>")
                .addClass("row push bg-primary")
                .text(stack.items[i]);

            $("#stack").append(block);
        }
    }

    // Display deleted elements
    function displayDeleted(element) {
        $("#popped").prepend(
            $("<div>")
                .addClass("row pop text-bg-danger border border-light")
                .text(element)
        );
    }

    // Initial stack values
    stack.push(100);
    stack.push(200);
    stack.push(300);
    stack.push(400);

    displayStack();

    // PUSH OPERATION
    $("button:contains('Push')").click(function () {

        let value = $("input").val().trim();

        if (value === "") {
            alert("Please enter a value.");
            return;
        }

        stack.push(value);

        $("input").val("");

        displayStack();
    });

    // POP OPERATION
    $("button:contains('Pop')").click(function () {

        let deletedItem = stack.pop();

        if (deletedItem === undefined) {
            alert("Stack is empty!");
            return;
        }

        displayDeleted(deletedItem);

        displayStack();
    });

    // PEEK OPERATION
    $("button:contains('Peek')").click(function () {

        if (stack.isEmpty()) {
            alert("Stack is empty!");
            return;
        }

        displayStack();

        $("#stack .push:first").addClass("top-item");
    });

    // CLEAR OPERATION
    $("button:contains('Clear')").click(function () {

        stack.clear();

        $("#popped").empty();

        displayStack();
    });

});