// Exercício 5: Desafio Integrador - E-commerce
// i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"

const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

const calculateAverageRatings = (products) => {
    // Calcular a média de avaliações
    products.forEach(product => {
        // Verificar se o produto tem avaliações
        if (product.reviews && product.reviews.length > 0) {
            // Calcular a média
            const total = product.reviews.reduce((acc, rating) => acc + rating, 0);
            // Adicionar a média ao produto
            product.averageRating = total / product.reviews.length;
            // Arredondar para duas casas decimais
            product.averageRating = Math.round(product.averageRating * 100) / 100;
        } else {
            // Se não houver avaliações, definir a média como 0
            product.averageRating = 0;
        }
    });
};
// Calcular as médias de avaliações
calculateAverageRatings(inventory);
// Exibir o inventário atualizado
console.log("Inventário com médias de avaliações:", inventory);