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

console.log('original', orders);
const newOrder = orders.map(item => item.total);
console.log('new', newOrder);

const newOrder3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    }//retornando un nuevo objeto que no viene con la referencia en memoria
})

console.log('original', orders);
console.log('new3', newOrder3);

const newOrder2 = orders.map(item => {
    item.tax = .19;
    return item; //Creando moficiacion al objeto en memoria ya que se trabajan con objetos y estamos retornando el mismo objeto
    //no ocurre con variables de tipo primitivo
})

console.log('original', orders);
console.log('new2', newOrder2);



