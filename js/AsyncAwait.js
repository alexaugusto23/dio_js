// ES7 - Async / Await
const asyncTimer = () => 
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async () => {
    //throw new Error('Oh no!');
    const data = await asyncTimer();
    return data;
};


const simpleFunc2 = async () => {
    //throw new Error('Oh no!');
    const data2 = await Promise.all([
        asyncTimer(),
        //fetch('data/json').then(resStream => resStream.json())

    ]); 
    return data2;
};

console.log(simpleFunc2());


console.log(simpleFunc());

simpleFunc()
    .then(data => {
    console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

// eventEmitter


    