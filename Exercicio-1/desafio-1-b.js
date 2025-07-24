
// b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)


const acais = ["Tradicional", "Trufado", "Guaraná"]
const frutas = ["Morango", "Banana", "Manga"];
const toppings = ["paçoca", "leite em pó", "Sucrilho"];

function combinarArrays(...arrays) {
  return [...arrays[0], ...arrays[1], ...arrays[2]];
}

const tigelaAcai = combinarArrays(acais, frutas, toppings)