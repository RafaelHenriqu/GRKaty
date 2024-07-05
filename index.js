const os = require('os')

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

function Binary(text,reverse){ 
const ASCII_TABLE = require("./ASCII Table.json")
if (reverse){ 
    let Text2 = ""
    let tc = text.split(' ')
    for (i=0;text.split(' ').length > i;i++){
        if (tc[i]=='')return Text2
        Text2 = Text2 + ASCII_TABLE[tc[i]] 
        Text2 = Text2 + ""
    }
    return Text2
}else{
    let Text2 = ""
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

// Config of Destkop //

function CPU(){
    return os.cpus()[0].model
}

function Memory(text_formatted){
    const Converte = (os.totalmem() / 1073741824).toString()
    if (text_formatted){
        const Memory = `${Converte.split('.')[0]},${Converte.split('.')[1][0]} GB`
        return Memory
    }else{ 
        const Memory = Converte.split('.')[0]
        return Memory
    }
    
    
}

function Desktop_Name(){
    return os.hostname()  
}

function System(){
    return os.platform()
}

function UserName(){
    return os.userInfo()["username"]
}

module.exports={
    Pi,
    Factorial,
    Fibonacci,
    Add,
    Multiply,
    Subtraction,
    Percentage,
    Binary,
    RandomNumber,
    Division,
    CPU,
    Memory,
    Desktop_Name,
    System,
    UserName,
}