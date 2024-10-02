function verificador(palavra){
    let tamanho = palavra.length;
    for(let i = 0; i <tamanho/2; i++){
        if (palavra[i] !==palavra[tamanho - 1 -i]){
            return "A palavra não é um Palíndromo";
        }else;
        return"A palavra é um palindromo"
    }
}    
let palavra = prompt("Digite uma palavra");
let resultado = verificador(palavra);
alert(resultado);