// assignment_LA4.js

// Initial queue of 5 customers
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Display current queue
console.log("Initial Customer Queue:", customerQueue);

// Function to allow new customer to enter the queue
function addCustomer() {
    let newCustomer = prompt("Enter your name to join the queue:");
    if (newCustomer) {
        customerQueue.push(newCustomer);
        alert(`${newCustomer}, you are added as customer #${customerQueue.length}`);
    }
    console.log("Updated Queue:", customerQueue);
}

// Call this function when a CSR wants to serve a customer by number
function serviceCustomer() {
    let number = prompt("Enter the customer number to service (1 to " + customerQueue.length + "):");
    number = parseInt(number);

    if (number >= 1 && number <= customerQueue.length) {
        let name = customerQueue[number - 1];
        alert(`Now servicing: ${name}`);
        customerQueue.splice(number - 1, 1); // Remove the customer
    } else {
        alert("Invalid number. Please try again.");
    }

    console.log("Updated Queue:", customerQueue);
}


