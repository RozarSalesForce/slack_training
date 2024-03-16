const calculatorName: string = "Yogesh Calc";

console.log(calculatorName + " is working ...");

const operations: Array<string|number> = [ 'add', 'sub', 'devide', 'mult'];

const findOperation = (index: number) => {
    if ( index << operations.length)
        return operations[index-1];
    return "index out of bound";
}

console.log("Operation present at 3rd position: " + findOperation(3));
operations.push(3);
console.log("all operations: " + operations);

type calculatorInput = { firstValue: number, secondValue: number, operation: string};

let input: calculatorInput = {
    firstValue: 10,
    secondValue: 5,
    operation: 'add'
}
console.log(input.operation);

const add = (a: number, b: number) =>{
    return a+b;
}

const sub = (a: number, b: number) =>{
    return a-b;
}

const mult = (a: number, b: number) =>{
    return a*b;
}

const devide = (a: number, b: number) =>{
    return a/b;
}

let calculator: (a: calculatorInput) => void;

calculator = ( input ) => {
    console.log(`input values is : ${input.firstValue}, ${input.secondValue} and operation is ${input.operation}`)
    var output: number;
    if(input.operation){
        switch (input.operation) {
            case 'add':{
                output = add(input.firstValue, input.secondValue);
                break;
            }
            case 'sub':{
                output = sub(input.firstValue, input.secondValue);
                break;
            }
            case 'mult':{
                output = mult(input.firstValue, input.secondValue);
                break;
            }
            case 'devide':{
                output = devide(input.firstValue, input.secondValue);
                break;
            }
        }
    }
    console.log(`Calculator ouput is ${output}`);
}

class multipleInputs {
    inputs: Array<calculatorInput>;
    numberOfInputs: number;

    constructor(a: Array<calculatorInput>){
        this.inputs = a;
        this.numberOfInputs = a.length;
    }
}

const multiInput = new multipleInputs(
    [
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
    ])

let multiCalculator: (a: multipleInputs) => void;

multiCalculator = ( data ) => {
    for(var i=0 ; i < data.numberOfInputs ; i+=1){
        var input = data.inputs[i];
        console.log(`input values is : ${input.firstValue}, ${input.secondValue} and operation is ${input.operation}`)
        var output: number;
        if(input.operation){
            switch (input.operation) {
                case 'add':{
                    output = add(input.firstValue, input.secondValue);
                    break;
                }
                case 'sub':{
                    output = sub(input.firstValue, input.secondValue);
                    break;
                }
                case 'mult':{
                    output = mult(input.firstValue, input.secondValue);
                    break;
                }
                case 'devide':{
                    output = devide(input.firstValue, input.secondValue);
                    break;
                }
            }
        }
        console.log(`Calculator ouput is ${output}`);
    }
    
}
calculator(input);
multiCalculator(multiInput);

interface Outcome {
    value: number;
    format(a:number): void;
}

let calculatorOutput: Outcome = {
    value: 10,
    format(value: number){
        console.log(`value is ${value}`);
    }
}

console.log(calculatorOutput.format(10));