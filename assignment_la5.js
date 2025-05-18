// assignment_LA5.js

// Hash table object
let customerHashTable = {};
let hashIndex = 1;

// Basic hash function using key = index
function addCustomerHash() {
    let name = prompt("Enter your name to join the customer hash queue:");
    if (name) {
        customerHashTable[hashIndex] = name;
        alert(`${name}, you are added as customer #${hashIndex}`);
        hashIndex++;
    }
    console.log("Customer Hash Table:", customerHashTable);
}

// Function to service a customer using their number (key)
function serviceCustomerHash() {
    let number = prompt("Enter the customer number to service:");
    number = parseInt(number);

    if (customerHashTable[number]) {
        let name = customerHashTable[number];
        alert(`Now servicing: ${name}`);
        delete customerHashTable[number]; // Remove serviced customer
    } else {
        alert("Invalid or already serviced customer number.");
    }

    console.log("Updated Customer Hash Table:", customerHashTable);
