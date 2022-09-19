let num1 = parseFloat(prompt("Please enter your first number"));
let operator = prompt("Please enter an operator (+, -, *, or /))");
let num2 = parseFloat(prompt("Please enter your second number"));

let result;

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else {
  result = num1 / num2;
}
alert(result);
console.log("${num1} ${operator} ${num2} = ${result}");
