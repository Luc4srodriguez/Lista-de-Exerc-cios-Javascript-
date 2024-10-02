function gerarTabelaMultiplicacao(numero) {
    if (numero > 0) {
        for (let i = 1; i <= 10; i++) {
            console.log(numero + " x " + i + " = " + (numero * i));
        }
    } else {
        console.log("Por favor, insira um número positivo.");
    }
}

gerarTabelaMultiplicacao(5);

