const matrix = [
    [1, 2, 3, [1, 2, 3, [1, 2]]],
    [4, 5, 6],
    [7, 8, 9],
]

const flatArray = []

for (let i = 0; i < matrix.length; i++) {
    const array = matrix[i]
    for (let j = 0; j < array.length; j++) {
        flatArray.push(matrix[i][j])
    }
}

//? una funcion recursiva 
function flatArr(array) {
    let newList = []
    if (typeof array != "object") return array;
    for (let i = 0; i < array.length; i++) {
        newList = newList.concat(flatArr(array[i]));
        console.log(
            newList.concat(flatArr(array[i]))
        )
    }
    return newList
}

console.log(flatArr(matrix))
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const array = [1, 2, [3, 4], 5, 6]
const result = array.flat()
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat()
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2)
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity)
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]