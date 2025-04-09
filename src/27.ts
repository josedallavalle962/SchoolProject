// This is a simple TypeScript program to demonstrate how to create a basic calculator.
// The program takes two numbers as input and performs addition, subtraction,
// multiplication, or division. You can modify this program to perform more complex operations.

function add(x: number, y: number): number {
    return x + y;
}

function subtract(x: number, y: number): number {
    return x - y;
}

function multiply(x: number, y: number): number {
    return x * y;
}

function divide(x: number, y: number): number {
    if (y === 0) throw new Error("Cannot divide by zero");
    return x / y;
}

// Example usage
const result = add(4, 5);
console.log(result); // Output: 9

result = subtract(10, 3);
console.log(result); // Output: 7

result = multiply(6, 8);
console.log(result); // Output: 48

result = divide(12, 3);
console.log(result); // Output: 4
