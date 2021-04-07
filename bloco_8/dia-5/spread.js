// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Maçã', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Laranja', 'Maracujá'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));