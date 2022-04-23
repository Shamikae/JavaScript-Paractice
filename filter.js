const items = [   
    { name: 'Bike', price: 100},
    { name: 'Doll', price: 15},
    { name: 'Skates', price: 25},
    { name: 'Ball', price: 10},
    { name: 'Video game', price: 50},
    { name: 'Car', price: 200},
    { name: 'Phone', price: 500},
    { name: 'TV', price: 1000}
    ];
// filter method takes in a function 
const filterItems = items.filter((item) => {
    return item.price >= 100
})
console.log(filterItems)