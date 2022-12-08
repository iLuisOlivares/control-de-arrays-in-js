//? filter() lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.

//? Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

//? cero coincidencias
//? todas coincidencias
//? algunas coincidencias
//? Pero nunca más coincidencias que el tamaño del array original.


const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
        newArray.push(element);
    }
}
console.log("original", words)
console.log("for", newArray);
console.log("original", words)


const filter = words.filter(item => item.length >= 6);
console.log("filter", filter)
console.log("original", words)

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const orderCon = orders.filter(order => order.delivered && order.total <= 180);
console.log(orderCon); 