function sum (a,b) {return a+b;}

function sumargs (a,b)
{
    var value = 0;
    for(var i=0; i < arguments.length; i++)
    {
        value += arguments[i];
    }
    return value;
}

//rest operator ...
function sumargs2 (...args)
{
    console.log(args);
    console.log(arguments);
}

function sumargs3 (...args)
{
    return args.reduce((acc, value) => acc+ value, 0);
}

const sumargs4 = (a, b, ...rest) =>
{
    console.log(a, b, rest);
}

// Spread operator -- strings arrays, objects and interable objects 
const mult = (...args) => args.reduce((acc, value) => acc * value, 1)
const summ = (...rest) => {return mult.apply(undefined, rest);};
const summ2 = (...rest) => {return mult(...rest);};

const str = 'Digital Innovation One';
const arr = [1,2,3,4];
function LogArgs(...args)
{
    console.log(args);
    console.log(arguments);
}

function LogArgs(a,b,c)
{
    console.log(a,b,c);

}

const arr2 = arr.concat([5,6,7]);
const arr3 = [...arr, 5,6,7];
const arr4 = [...arr, ...arr2, 0, 0, 0];
const arrClone = [...arr];

const obj = 
{
    teste: 123
};

const obj2 = 
{
    ...obj,
    teste: 456,
    teste2: 'hello'

};

const objMerged = 
{
    ...obj,
    ...obj2
};

const obj3 = obj;
obj3.teste = 789;

const objClonerasso = 
{
    teste: 123,
    subObj:{teste: 123}
};

//const objClonerasso2 = {...objClonerasso};
//objClonerasso2.subObj.teste = 456;

const objClonerasso3 = {...objClonerasso, subObj: {...objClonerasso.subObj}};
objClonerasso3.subObj.teste = 456;



//LogArgs(...arr);
//console.log(sum(5,5));
//console.log(sumargs(10,20,30,5));
//console.log(sumargs4(10,20,30,5));
//console.log(summ2(5,5,5,2,3));
console.log(objClonerasso3);