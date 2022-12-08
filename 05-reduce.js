const total = [1, 2, 3, 4, 5];

const suma = total.reduce((sum, item) => { return sum + item }, 0); // el 0 es el estado inicial de sum


console.log(suma);



const reloaded = [1, 3, 2, 2, 3, 3, 4, 6, 7, 9, 7, 10, 8, 5, 5];

const numbers = reloaded.reduce((count, item) => {

    if (item <= 5) {
        count["1-5"] += 1
    } else if (item <= 8) {
        count["6-8"] += 1
    } else {
        count["9-10"] += 1
    }
    return count;
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0
})

console.log(numbers)