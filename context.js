console.log(this)

function test(){
    const bar =()=>{
        console.log(this)
    }
    bar();
}
test();

const bar =()=>{
    console.log(this)
}
bar();

function tests(){
        console.log(this)
}
tests();