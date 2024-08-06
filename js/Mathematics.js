const Language = require("../json/Language/en-us.json")



function Division(N1=1,N2=1,N3=1,N4=1,N5=1,N6=1,N7=1,N8=1,N9=1,N10=1){
    return  N1 / N2 / N3 / N4 / N5 / N6 / N7 / N8 / N9 / N10
}

function Multiply(N1=1,N2=1,N3=1,N4=1,N5=1,N6=1,N7=1,N8=1,N9=1,N10=1){
    return N1 * N2 * N3 * N4 * N5 * N6 * N7 * N8 * N9 * N10
}

function Add(N1=0,N2=0,N3=0,N4=0,N5=0,N6=0,N7=0,N8=0,N9=0,N10=0){
    return N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10
}

function Subtraction(N1=0,N2=0,N3=0,N4=0,N5=0,N6=0,N7=0,N8=0,N9=0,N10=0){
    return N1 - N2 - N3 - N4 - N5 - N6 - N7 - N8 - N9 - N10
}

function Percentage(Number1,Number2){
    if (typeof(Number1) != 'number' || typeof(Number1) != 'number'){return Language.Invalid_Value}
    return (Number1 / 100) * Number2
}

function Pi(){
    return Math.PI
}

function Factorial(Number){
    if (typeof(Number) != 'number'){return Language.Invalid_Value}
    let n = Number
    for (Number;Number>1;Number--){ 
        n = n * (Number-1)
    }
    return n
}

function Fibonacci(limit){
    if (typeof(limit) != 'number'){return Language.Invalid_Value}
    let Fibonacci_table=[1,1]
    while (true){
        if (Fibonacci_table[1] >= limit){ 
            return Fibonacci_table[1]
    }else{
        Fibonacci_table[0] = Fibonacci_table[0] + Fibonacci_table[1]
        Fibonacci_table[1] = Fibonacci_table[0] - Fibonacci_table[1]
        }}
}

function Binary(text,reverse){ 
const ASCII_TABLE = require("../json/Binary.json")
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
    if (typeof(Max) != 'number'){return Language.Invalid_Value}
    return Math.floor(Math.random() * Max)
}



// Update 1.0.0

function IMC(Weight=1,Height=1){
    if (typeof(Weight) != 'number' || typeof(Height) != 'number'){return Language.Invalid_Value}
    return Weight / (Height*Height)
}

function Arithmetic_Average(Numbers = [0,0],text_formatted=false){
    if (typeof(Numbers) != 'object'){return Language.Invalid_Value}
    Final_Number = 0
    Numbers.forEach((Dados)=>{
        Final_Number = Final_Number + Dados
    })

    if (text_formatted){
        return Math.floor(Final_Number / Numbers.length)
    }else{
        return Final_Number / Numbers.length
    }

}

function Geometric_Mean(Numbers=[0,0],text_formatted=false){
    if (typeof(Numbers) != 'object'){return Language.Invalid_Value}
    Number = 1
    Numbers.forEach(items=>{
        Number = Number * items
    })
    if (text_formatted){
        return Math.floor(Math.pow(Number,1 / Numbers.length))
    }else{
        return Math.pow(Number,1 / Numbers.length)        
    }

}

function Root(Number){
    if (typeof(Number) != 'number'){return Language.Invalid_Value}
    for (i=0;i<Number;i++){
        return Math.sqrt(Number)
    }

}

function Area(Height=0,Width=0,geometric_figures="Square"){
    if (geometric_figures=="Rectangle") return Height * Width
    if (geometric_figures=="Square") return Width * Width
    if (geometric_figures=="Triangle") return (Height * Width) / 2

    return Language.Area_ERROR


    // if (geometric_figures=="Circle") return // Update 1.0.1
    // if (geometric_figures=="trapeze") return () // Update 1.0.1
/*
Rectangle: Área = base × altura
Square: Área = lado × lado (ou lado²)
Circle: Área = π × raio²
Triangle: Área = (base × altura) / 2
trapeze: Área = (base maior + base menor) × altura / 2
*/
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
    IMC,
    Arithmetic_Average,
    Geometric_Mean,
    Root,
    Area,
}