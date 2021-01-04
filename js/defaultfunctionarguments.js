function multiply (a, b = randomNumber() /*a,1*/ ) { 
    //b = b || 1;
    //b = typeof b === 'undefined' ? 1: b;
    //if (typeof b === 'undefined'){ b = 1;}
    
    return a*b; }



//lazy evaluation
function randomNumber(){
    return Math.random()*10;
}

//console.log(multiply(5));
//console.log(randomNumber());

/* Enhanced Object Literals*/

/*
var obj = {
    prop1: 'Digital Innovation One'
};
*/

var prop1 = 'Digital Innovation One';

var obj = {
    //prop1: prop1 
    prop1 
};

console.log(obj);

function method1() {console.log('method called');}
var obj2 = {
    //prop1: prop1 
    method1 
};
obj2.method1();


var obj3 = {
    sum: function sum(a,b){return a + b;}
};
console.log(obj3.sum(1,5));

var obj4 = {
    sum(a,b){return a + b;}
};
console.log(obj4.sum(5,5));