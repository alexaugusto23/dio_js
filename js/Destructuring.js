var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var obj = 
{
    name: 'Celso',
    props:{age:26, colors: ['black', 'blue']}
}

var name = obj.name;
var age = obj.props.age; 

//Destructuring
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

//var { name } = obj;
var { name: name2 } = obj;
name2 = 'teste'

var { props: {age: age2, colors: [color1, color2]} } = obj;

function sum (arr)
{
    var a = arr[0]
    var b = arr[1]
    return a + b;
}

function sum2 ([a,b] = [])
{
    return a + b;
}

function sum3 ([a,b] = [0,0])
{
    return a + b;
}

function sum4 ({a,b})
{
    return a + b;
}


console.log(sum4({a: 5, b: 5}));
//console.log(tomato2);

