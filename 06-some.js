const array = [1, 2, 3, 4, 5];
const array2 = [1, 3, 5];

const even = (element) => element % 2 === 0;

console.log(array.some(even));
// resultado true porque algunos de los items del array cumplen con la indicacion

console.log(array2.some(even));
// resultado false porque ninguno cumple