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
function (...)
{
    return
}


console.log(sum(5,5));
console.log(sumargs(10,20,30,5));