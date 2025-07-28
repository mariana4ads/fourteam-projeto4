// b. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)


const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

const taxPrice = products.map((product) => {
  return (product.price * 1.15).toFixed(2)
});

console.log(taxPrice);
