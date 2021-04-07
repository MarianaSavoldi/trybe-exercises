// Escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => number * value;

console.log(multiply(8)); // 8 * 1 = 8
console.log(multiply(8, 3)); // 8 * 3 = 24