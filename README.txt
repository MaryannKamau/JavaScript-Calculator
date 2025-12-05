## JavaScript Calculator with History

This is a set of JavaScript functions that provide basic arithmetic operations (addition, subtraction, multiplication, and division) and maintains a history of all calculations performed during the session.

---

## Key Features

* **Four Basic Operations**: Functions for `add`, `subtract`, `multiply`, and `divide`.
* **Error Handling**: The `divide` function checks for and prevents division by zero.
* **Centralized Execution**: The `performCalculation` function handles operation selection, executes the chosen operation, and stores the details.
* **History Tracking**: All successful and failed calculation attempts are stored in the global `calculationHistory` array.
* **History Display**: The `displayHistory` function prints a formatted list of all past calculations to the console.

---

## Functions Included

The code provides the following primary functions:

| Function Name | Description |
| :--- | :--- |
| **`add(num1, num2)`** | Returns the sum of two numbers. |
| **`subtract(num1, num2)`** | Returns the difference between two numbers. |
| **`multiply(num1, num2)`** | Returns the product of two numbers. |
| **`divide(num1, num2)`** | Returns the quotient. Returns an error message if `num2` is 0. |
| **`performCalculation(num1, num2, operation)`** | Executes the operation specified by the string (`'add'`, `'subtract'`, etc.) and logs the details to `calculationHistory`. |
| **`displayHistory()`** | Prints the contents of the `calculationHistory` array to the console in a readable format. |

---

## How to Use 

Since this is a module of functions and not a command-line application, you integrate it into a larger JavaScript environment (e.g., a web application or a Node.js project) by calling the `performCalculation` and `displayHistory` functions.

### Example Function Calls:

1.  **Perform a Calculation:**
    ```javascript
    performCalculation(15, 3, 'add');
    // Result is stored in history and the value 18 is returned.
    ```

2.  **Handle Division by Zero:**
    ```javascript
    performCalculation(10, 0, 'divide');
    // The error message "Error: Division by zero is not allowed." is returned and logged.
    ```

3.  **View History:**
    ```javascript
    displayHistory();
    // Prints the list of all performed operations to the console.
    ```

---

## History Data Structure

The `calculationHistory` array stores objects with the following structure for each entry:

```javascript
{
    operation: 'add' || 'subtract' || 'multiply' || 'divide',
    num1: 10,
    num2: 5,
    result: 15, // Can be the calculated number or an error string
    timestamp: 'YYYY-MM-DDTHH:MM:SS.sssZ' // ISO 8601 format
}
