// Exercício 4: findIndex, some e every
// b. Use some para verificar se existe alguma tarefa de baixa prioridade completa

const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

const hasCompletedLowPriorityTask = tasks.some(task => task.priority === "baixa" && task.completed);
console.log("Existe alguma tarefa de baixa prioridade completa?", hasCompletedLowPriorityTask);