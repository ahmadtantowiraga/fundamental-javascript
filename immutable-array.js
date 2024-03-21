const numbers=[1,2,3,4,5,6,7];

const newNumber=numbers.map((number)=>{
    let newNumber=number*2;
    return newNumber;
});
console.log(newNumber);

const newForeach=numbers.forEach((number)=>{
    let newNumber=number*2;
    return newNumber;
})
console.log(newForeach);

const filterNumbers=numbers.filter((number)=>{
    return number > 4;
});
console.log(filterNumbers);

const number=numbers.find((number)=>number===3);
console.log(number);

let cars=[{name:'porche'},{name:'BMW'}];

const bmw=cars.find((car)=>car.name==='BMW')
console.log(bmw)




