

const numbers = [1, 2, 3, 4]

numbers.map(number => [number * 2])
// [[2], [4], [6], [8]]

numbers.flatMap(number => [number * 2])
// [2, 4, 6, 8]

const rta = numbers.map(number => [number * 2]).flat()
// [2, 4, 6, 8]
console.log(rta)

const numbers2 = [1, [2, 3], 4, 5]
numbers2.flatMap(number => [number * 2])
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

console.log(Object.values(calendars).flatMap(arr => arr));
console.log(Object.values(calendars).flatMap(arr => arr.map(e => e.startDate)));

const input = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]

function countWords(array) {
    return (array.flatMap(e => e.split(' ')).length);
}

console.log(countWords(input));

const array = [['🐸', '🐱'], '🐹', ['🐯']];
const rta2 = array.flat();
console.log(rta2)