const nums = [1,2,3,4,5]

// const TotalSum = nums.reduce((acc , currVal) => acc + currVal,0)
// console.log(TotalSum);

const TotalSum = nums.reduce(function(acc, currVal) {
    console.log(`acc : ${acc} and currVal: ${currVal}`);
    return acc + currVal
    
},0)
console.log(TotalSum);


const shoppingCarts = [

    {
        item:"java with DSA",
        price:3999,
    },
    {
        item:"js",
        price:2999,
    },
    {
        item:"cybersecurity",
        price:8999,
    },
    {
        item:"python",
        price:999,
    },
    {
        item:"app dev",
        price:5999,
    },
]

const priceTopay = shoppingCarts.reduce((acc, item) => acc + item.price ,0)
console.log(priceTopay);





