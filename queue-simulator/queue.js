class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to rear of queue
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;

        return element;
    }

    // Remove element from front of queue
    dequeue() {
        if (this.count == 0) {
            return undefined;
        }

        let deleteItem = this.items[0];

        this.items.shift();
        this.count--;

        return deleteItem;
    }

    // Check front element of queue
    peek() {
        if (this.count == 0) {
            return undefined;
        }

        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.count == 0;
    }

    // Return queue size
    size() {
        return this.count;
    }

    // Print queue elements
    print() {
        let str = '';

        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }

        return str;
    }

    // Clear queue
    clear() {
        this.items = [];
        this.count = 0;

        return this.items;
    }
}

const queue = new Queue();

$(document).ready(function () {

    // Display queue elements
    function displayQueue() {

        $("#queue").empty();

        for (let i = 0; i < queue.count; i++) {

            let block = $("<div>")
                .addClass("row push bg-primary queue-item");

            if (i == 0) {
                block.addClass("front-item");
            }

            let value = $("<div>")
                .text(queue.items[i]);

            block.append(value);

            if (i == 0) {
                block.append(
                    $("<small>").text("FRONT")
                );
            }

            if (i == queue.count - 1) {
                block.append(
                    $("<small>").text("REAR")
                );
            }

            $("#queue").append(block);
        }
    }

    // Display deleted elements
    function displayDeleted(element) {

        $("#deleted").prepend(
            $("<div>")
                .addClass("row pop text-bg-danger border border-light")
                .text(element)
        );
    }

    // ENQUEUE OPERATION
    $("#enqueueBtn").click(function () {

        let value = $("#queueInput").val().trim();

        if (value === "") {
            $("#message").text("Please enter a value.");
            return;
        }

        queue.enqueue(value);

        $("#queueInput").val("");

        $("#message").text("Element added to the rear of the queue.");

        displayQueue();
    });

    // DEQUEUE OPERATION
    $("#dequeueBtn").click(function () {

        let deletedItem = queue.dequeue();

        if (deletedItem === undefined) {
            $("#message").text("Queue is empty! Nothing to dequeue.");
            return;
        }

        displayDeleted(deletedItem);

        $("#message").text(
            deletedItem + " removed from the front of the queue."
        );

        displayQueue();
    });

    // PEEK OPERATION
    $("#peekBtn").click(function () {

        if (queue.isEmpty()) {
            $("#message").text("Queue is empty! Nothing to peek.");
            return;
        }

        displayQueue();

        $("#queue .queue-item:first").addClass("front-item");

        $("#message").text(
            "Front element: " + queue.peek()
        );
    });

    // CLEAR OPERATION
    $("#clearBtn").click(function () {

        queue.clear();

        $("#deleted").empty();

        $("#message").text("Queue cleared.");

        displayQueue();
    });

});