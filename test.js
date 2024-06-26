// Example JavaScript code

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example usage:
const num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);
