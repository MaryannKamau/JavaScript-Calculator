const calculationHistory = [];

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return num1 / num2;
}


function performCalculation(num1, num2, operation) {
    let result;

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            return "Error: Invalid operation specified.";
    }

    const calculationDetails = {
        operation: operation,
        num1: num1,
        num2: num2,
        result: result,
        timestamp: new Date().toISOString() 
    };

    calculationHistory.push(calculationDetails);
    return result;
}


function displayHistory() {
    console.log("--- Calculation History ---");
    if (calculationHistory.length === 0) {
        console.log("No calculations performed yet.");
        return;
    }

    calculationHistory.forEach((calc, index) => {
       
        let operatorSymbol;
        switch (calc.operation) {
            case 'add': operatorSymbol = '+'; break;
            case 'subtract': operatorSymbol = '-'; break;
            case 'multiply': operatorSymbol = '*'; break;
            case 'divide': operatorSymbol = '/'; break;
            default: operatorSymbol = '?';
        }
        console.log(`[${index + 1}] ${calc.num1} ${operatorSymbol} ${calc.num2} = ${calc.result}`);
    });
    console.log("---------------------------");
}


// --- Example Usage/Demonstration ---


console.log("Starting Calculator Demo...");

console.log(`Result of 10 + 5: ${performCalculation(10, 5, 'add')}`);
console.log(`Result of 20 - 7: ${performCalculation(20, 7, 'subtract')}`);
console.log(`Result of 6 * 4: ${performCalculation(6, 4, 'multiply')}`);
console.log(`Result of 100 / 10: ${performCalculation(100, 10, 'divide')}`);
console.log(`Result of 9 / 0: ${performCalculation(9, 0, 'divide')}`); 


displayHistory();

