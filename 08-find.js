const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];


console.log(products.find(item => item.price === 34));
console.log(products.findIndex(item => item.price === 34));
console.log(products.findIndex(item => item.price === 33));