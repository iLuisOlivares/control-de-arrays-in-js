const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];
const newArray = [...elements];

const concatMetod = elements.concat(otherElements);
console.log('Concat:', concatMetod);

const newArray2 = [...elements, ...otherElements];
console.log('...:', newArray2);

elements.push(...otherElements);
console.log('elements', elements)


const arrayA = ["Java", "JavaScript"];
const arrayB = ["C#", "PHP", "Java"];

const mergedArrays = [...new Set([...arrayA, ...arrayB])]

//(4) ['Java', 'JavaScript', 'C#', 'PHP']
console.log(mergedArrays)

//? Si estas trabajando con un arrays de Objs igual una forma de copiar cada elemento sin la referencia podría ser:
//? const newArray = myArray.map(a => ({…a}));

