let a=10;
const foo =()=>{
    console.log('cetak varibale a', a);
    let b=10;

    const bar=()=>{
        console.log('cetak variable b', b);
    }
    bar();
}

foo();