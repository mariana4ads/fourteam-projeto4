// Exercício 4: findIndex, some e every
// c. Use every para verificar se todas as tarefas de alta prioridade estão incompletas

const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

const allHighPriorityTasksIncomplete = tasks.every(task => task.priority !== "alta" || !task.completed);
console.log("Todas as tarefas de alta prioridade estão incompletas?", allHighPriorityTasksIncomplete);