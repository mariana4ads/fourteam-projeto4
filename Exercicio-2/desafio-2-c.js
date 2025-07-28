// c. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos


const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

let totalValue = 0;

products.forEach((product) => {
  totalValue += product.price;
});

console.log(`Valor total: R$ ${totalValue.toFixed(2)}`);
