
// b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)

const acais = ["Tradicional", "Trufado", "Guaraná"]
const frutas = ["Morango", "Banana", "Manga"];
const toppings = ["paçoca", "leite em pó", "Sucrilho"];

//usando .concat
function combinarArrays(...arrays) {
  return [].concat(...arrays);
}

// exibindo os elementos combinados
console.log(combinarArrays(acais, frutas, toppings));
