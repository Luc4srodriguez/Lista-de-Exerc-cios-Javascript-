function calculadora (num1, num2, operacao){

    if (operacao === "soma"){
        return num1 + num2;
    }else if (operacao === "subtração"){
        return num1 - num2;
    }else if (operacao === "divisão"){
        if (num2 !==0){
        return num1/num2;
        }
    }else if (operacao === "multiplicação"){
        return num1*num2
    }
}

console.log(calculadora(10,5,"soma"))
console.log(calculadora(10,5,"subtração"))
console.log(calculadora(10,5,"divisão"))
console.log(calculadora(10,5,"multiplicação"))