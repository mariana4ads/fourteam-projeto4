// a. Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

const person = { name: "Mariana", age: 38, city: "SP" };

function objeto(person) {
  const isAdult = person.age >= 18;
  return { ...person, isAdult };
}

console.log(objeto(person));
