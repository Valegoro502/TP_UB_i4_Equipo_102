function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

console.log(add(7,9));
console.log(subtract(99,10));
console.log(multiply(3,4));

module.exports = { add, subtract, multiply };
