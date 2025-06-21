const mynumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynumbers.map((num) => (num +10))
// const newnums = mynumbers.map((num) => {return num *10})
// console.log(newNums);
// console.log(newnums);


//chaining

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = nums
                        .map((num) => (num *10))
                        .map((num) => (num + 10))
                        .filter((num) => {
                            return num > 50
                        })

console.log(newNumbers);
