let valor = parseInt(gets());

var valores = [0, 0, 0, 0, 0, 0, 0] 
var cedvalor = [100, 50 ,20 ,10 , 5 , 2 ,1]

var tempvalue = 0;
tempvalue = valor;


for ( let i = 0 ; i < cedvalor.length ; i++)
{ 
  
  valores [i] = Math.floor(tempvalue/cedvalor[i]); 
  tempvalue -= valores[i] * cedvalor[i];

  if (tempvalue < 0)
  {
    break
  }
  
}

console.log(valor);
console.log(valores[0] + " nota(s) de R$ 100,00"); 
console.log(valores[1] + " nota(s) de R$ 50,00"); 
console.log(valores[2] + " nota(s) de R$ 20,00"); 
console.log(valores[3] + " nota(s) de R$ 10,00"); 
console.log(valores[4] + " nota(s) de R$ 5,00"); 
console.log(valores[5] + " nota(s) de R$ 2,00"); 
console.log(valores[6] + " nota(s) de R$ 1,00"); 