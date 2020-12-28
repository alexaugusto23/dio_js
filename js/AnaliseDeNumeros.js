var par = 0;
var imp = 0;
var pos = 0;
var neg = 0;
var i = 1;

for(i; i < 6; i++)
{
    var entrada = gets();
    
    if(entrada % 2 === 0)
    {
        par++
    }
    else
    {
        imp++
    }
    if(entrada > 0)
    {
        pos++
    }
    if(entrada < 0)
    {
        neg++
    }
    

}

console.log(par + " valor(es) par(es)");
console.log(imp + " valor(es) impar(es)");
console.log(pos + " valor(es) positivo(s)");
console.log(neg + " valor(es) negativo(s)");