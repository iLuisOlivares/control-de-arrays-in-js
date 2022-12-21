const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 14,
    },
];


console.log(team.every(item => item.age < 15));

export function checkArray(array) {
    // Tu código aquí 👈
    return array.every(item => item % 2 === 0)
}
