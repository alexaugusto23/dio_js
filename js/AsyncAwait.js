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

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users();

users.on('User logged', data => {
//users.once('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Celso Henrique' });
users.userLogged({user: 'Vicente Rodrigues' });
    