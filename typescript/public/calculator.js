const calculatorName = "Yogesh Calc";
console.log(calculatorName + " is working ...");
const operations = ['add', 'sub', 'devide', 'mult'];
const findOperation = (index) => {
    if (index << operations.length)
        return operations[index - 1];
    return "index out of bound";
};
console.log("Operation present at 3rd position: " + findOperation(3));
operations.push(3);
console.log("all operations: " + operations);
let input = {
    firstValue: 10,
    secondValue: 5,
    operation: 'add'
};
console.log(input.operation);
const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
    return a - b;
};
const mult = (a, b) => {
    return a * b;
};
const devide = (a, b) => {
    return a / b;
};
let calculator;
calculator = (input) => {
    console.log(`input values is : ${input.firstValue}, ${input.secondValue} and operation is ${input.operation}`);
    var output;
    if (input.operation) {
        switch (input.operation) {
            case 'add': {
                output = add(input.firstValue, input.secondValue);
                break;
            }
            case 'sub': {
                output = sub(input.firstValue, input.secondValue);
                break;
            }
            case 'mult': {
                output = mult(input.firstValue, input.secondValue);
                break;
            }
            case 'devide': {
                output = devide(input.firstValue, input.secondValue);
                break;
            }
        }
    }
    console.log(`Calculator ouput is ${output}`);
};
class multipleInputs {
    constructor(a) {
        this.inputs = a;
        this.numberOfInputs = a.length;
    }
}
const multiInput = new multipleInputs([
    {
        firstValue: 10,
        secondValue: 5,
        operation: 'add'
    },
    {
        firstValue: 20,
        secondValue: 5,
        operation: 'mult'
    },
    {
        firstValue: 100,
        secondValue: 5,
        operation: 'devide'
    }
]);
let multiCalculator;
multiCalculator = (data) => {
    for (var i = 0; i < data.numberOfInputs; i += 1) {
        var input = data.inputs[i];
        console.log(`input values is : ${input.firstValue}, ${input.secondValue} and operation is ${input.operation}`);
        var output;
        if (input.operation) {
            switch (input.operation) {
                case 'add': {
                    output = add(input.firstValue, input.secondValue);
                    break;
                }
                case 'sub': {
                    output = sub(input.firstValue, input.secondValue);
                    break;
                }
                case 'mult': {
                    output = mult(input.firstValue, input.secondValue);
                    break;
                }
                case 'devide': {
                    output = devide(input.firstValue, input.secondValue);
                    break;
                }
            }
        }
        console.log(`Calculator ouput is ${output}`);
    }
};
calculator(input);
multiCalculator(multiInput);
