//bad
const user=new Object();

//good literal syntax
const Person={
    firstName: 'Sayyid Nur',
    lastName: 'Cahyo',
    age: 90,
    isMarried:true,
    address:{
        street: 'Jl. Topaz',
        no:1
    },

    sayHello: (name='Gais')=>{
        console.log(`Hello ${name}`);
        console.log(this)
    },

    sayHi(){
        console.log(`Hi i'am ${this.firstName} ${this.lastName}`);
        console.log(this)
    }
};
console.log(Person);
console.log("=".repeat(20))
Person.sayHello();
Person.sayHi();

const newPerson={...Person, address: {...Person.address}};
newPerson.firstName='Dzaki';
newPerson.address.no=2;

console.log(Person);
console.log(newPerson);

const numbers=[1, 2, 3, 4, 5];
const newNumber=[...numbers];

console.log(numbers);
console.log(newNumber);
console.log(...numbers);

const keys=Object.keys(newPerson);
const objLength=Object.keys(newPerson).length;
console.log(objLength);
console.log(keys);
const values = Object.values(newPerson);
console.log(values);

//passing by value and reference

//value(string, number, booelan, undefined, null)
function changeValue(number){
    number=15;
    console.log(number);
}

let number=10;
changeValue(number);
console.log(number);

//refeence(obj, array)
function changeValueObj(obj){
    obj.firstName='Adil';
    console.log(obj.firstName);
}

changeValueObj(newPerson);
console.log(newPerson.firstName);

//destructuring object:
const porche={
    name:'Kena Tabraj',
    brand:'Porche',
    color:'Silver',
    seats:{
        count:2,
        type:'Leather'
    }
}

//rest operator
const brand='Rode brand';
//alias
const {name, brand : merk, ...sisa}=porche;

console.log(name);
console.log(brand);
console.log(merk);
console.log(sisa.color);
console.log(sisa.count);

//constructuring array

const numbers2=[1, 3, 4, 5];
const [a, b, c, d]=numbers2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

function calculator(a, b){
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ];
}
const [sum, sub, multiply, divide]=calculator(5, 5);
console.log(sum, sub, multiply, divide)

function crud(){
    const cars=[];
    const add=(car)=>{
        cars.push(car);
    }

    const remove=()=>{
        cars.pop();
    }
    return {
        cars,
        add,
        remove
    }
}

const {cars, add, remove}=crud();
add(porche);
console.log(cars);