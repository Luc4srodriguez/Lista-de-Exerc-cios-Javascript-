let tarefas = [];
    for(let i=0; i<5; i++){
        let tarefa = prompt("Digite uma tarefa" + (i+1) + ":");
        tarefas.push(tarefa);
    }

console.log("Lista das suas tarefas")
console.log(tarefas);

let tarefaconcluida = prompt("Qual tarefa deseja marcar como concluida? (digite o numero de 1 a 5)")
tarefas.splice(tarefaconcluida -1, 1);

console.log("Lista atualizada de tarefas");
console.log(tarefas);