// function sayHello(){
//     console.log("Hello Ahmad")
// }

// function sayHelloWithArg(name){
//     console.log(`Hello ${name}`);
// }
// sayHello();
// sayHelloWithArg("ahamed");

// function sum(a,b){
//     return a+b;
// }
// const result=sum(10,5);
// console.log(result);

// // Funtion Expressiom
// const sub=function(a,b){
//     return a-b;
// }

// console.log(sub(10,5));

// const multiply=(a,b)=>{
//     return a*b;
// }
// console.log(multiply(2,2));

// const sayHello=name=>console.log(`Hello ${name}`);

function panggil(func){
    console.log('ini didalam func panggil');
    console.log('memanggil func panggil');
    func();
    console.log('selesai memanggil');
    console.log('dikembalikan');
}
function func(){
    console.log('hello');
}
panggil(func);

//cara 2
panggil(function as(){
    console.log('hello word')
});
//cara 3
panggil(()=>{
    console.log('Hello Dunia')
})