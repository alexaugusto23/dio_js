const promiseArray = [];

for(let i = 1; i <= 4; i++) {promiseArray[i - 1] = i};

Promise.all(promiseArray).then((arr) => {console.log(arr.join('\n'))});
Promise.all(promiseArray).then((arr) => {console.log(arr)});

