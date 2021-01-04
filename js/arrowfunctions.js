//função
function log(value)
{
    console.log(value);
}

//função anonima
var log2 = function(value)
{
    console.log(value);
}

//função anonima soma
var sumold = function(a, b)
{
    return a+b;
}

//ArrowFunctions
var sum = (a, b) => a + b;

var sum = (a, b) => {return a + b;}

var sum = (a, b) => 
{
    var a = 0;
    if(a == 0){console.log("zero");}
    return a + b;
} 

var sum = a => a + 5; // apenas um argumento pode-se ocultar o parenteses

var sum = ({a}) => a + 5; // parenteses obrigatório

var sum = (...a) => a + 5; // parenteses obrigatório

var sum = (a = 5) => a + 5; // parenteses obrigatório

// declarando objetos
var obj = 
{
    test: '123'
}

var createObj = () => ({ test: 123 });



log2('teste2');
console.log(sum(5,125));
console.log(createObj());