let pessoas = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome da pessoa " + (i + 1) + ":");
    let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
    
    pessoas.push({ nome: nome, idade: idade });
}

function exibirMaioresDe18(pessoas) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 18) {
            console.log(pessoas[i].nome + " tem mais de 18 anos.");
        }
    }
}

exibirMaioresDe18(pessoas);
