// Mathematics //

function Pi(){
    return Math.PI
}

function Factorial(Number){
    let n = Number
    for (Number;Number>1;Number--){ 
        n = n * (Number-1)
    }
    return n
}

function Fibonacci(limit){
    let Fibonacci_table=[1,1]
    while (true){
        if (Fibonacci_table[1] >= limit){ 
            return Fibonacci_table[1]
            break
    }else{
        Fibonacci_table[0] = Fibonacci_table[0] + Fibonacci_table[1]
        Fibonacci_table[1] = Fibonacci_table[0] - Fibonacci_table[1]
        }}
}

function Add(Number1,Number2){
    return Number1 + Number2
}

function Multiply(Number1,Number2){
return Number1 * Number2
}

function Subtraction(Number1,Number2){
    return Number1 - Number2
}

function Percentage(Number1,Number2){
    return (Number1 / 100) * Number2
}

function Binary(text,Reverse){
const ASCII_TABLE = require("./ASCII Table.json")
    if (Reverse){ // Trasnforming Code Binary in text,in Comming soon
        return 'System In Comming Soon'
    }else{
let Text2 = " "
    for (i=0;text.length > i;i++){
        Text2 = Text2 + ASCII_TABLE[text[i]]
        Text2 = Text2 + " "
    }
    return Text2    
}
}

function RandomNumber(Max){
    return Math.floor(Math.random() * Max)
}

function Division(Number1,Number2){
    return Number1 / Number2
}


module.exports={
    Pi,
    Add,
    Division,
    Factorial,
    Fibonacci,
    Multiply,
    Subtraction,
    Binary,
    RandomNumber,
    Division
}