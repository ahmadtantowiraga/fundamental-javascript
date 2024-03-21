//Sebelum ES6 menggunakan Constraktor function
function Person(){
    this.firstName='Sayyid Nur';
    this.lastName='Cahyo';
    this.sayHello=function(){
        console.log('Say Hello');
    }
}
const cahyo =new Person();
console.log(cahyo.firstName);
console.log(cahyo.lastName);
cahyo.sayHello();

//Setelah ES 6
class Car {

    constructor(name, brand){
        this.name=name;
        this.brand=brand;
    }

    //method
    starEngine(){
        console.log('brumm')
    }
}

const car=new Car('ahmad', 'yamaha');
console.log(car.name);
car.starEngine();

class Car2 {
    #name
    #brand
    constructor(name, brand){
        this.#name=name;
        this.#brand=brand;
    }

    //method
    starEngine(){
        console.log('brumm')
    }
    get name(){
        return this.#name
    }
    set name(name){
        this.#name=name;
    }
}
const porche=new Car2('Porche', 'Porcher');

console.log(porche.brand);
console.log(porche.name);

//class util
class Util {
    static validateName(name){
        return name==='Cahyo'
    }
}
const result=Util.validateName('Cahyo');
console.log(result);


class Hewan {
    constructor(name){
        this.name=name;
    }
    berjalan(){
        console.log(`${this.name} Berjalan`);
    }
    makan(){
        this.berjalan()
    }
}

class Kucing extends Hewan{
    constructor(name){
        super(name)
    }
}

const kuc=new Kucing("tomeng");
kuc.berjalan();


