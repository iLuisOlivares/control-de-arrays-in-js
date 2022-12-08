//? Con for
const newArray = []
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArray.push(element + 'o_o');
}

console.log('original', letters);
console.log('new', newArray);

//? Map es Inmutable
//? No modifica el array original, crea uno nuevo transformado, copia la referencia en memoria y modifica solo aquellos que se modifican

const letters = ['a', 'b', 'c'];

const newArrayMap = letters.map((letter) => {
    return letter + '++'
});


console.log('original', letters);
console.log('new-map', newArrayMap);

