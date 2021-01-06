//symbols
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

const obj = {[uniqueId]: 'Hello'};

console.log(obj);
console.log(uniqueid === uniqueid2);
//Symbol.iterator
//Symbol.split
//Symbol.toStringTag
//Arr

//const arr = [1, 2, 3, 4];
//const str = "Digital Innovation One";
//const it = arr[Symbol.iterator]();

//for (let value of str){console.log(value);}

//console.log(arr[Symbol.iterator]().next());

/*
while(true)
{
    let {value, done} = it.next()
    if (done){break;}
    console.log(value);
}
*/
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

Symbol.iterator;

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;
        return{
            next: () => { 
                i++;
                return { 
                    value: this.values[i -1], 
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
