/*var nome = "Alexsandro!";
var idade = 29;
var idadedois = 29;
var frase = "Japão é o melhor time do mundo!";
var n1 = 5;
var n2 = 3;

alert(nome + " tem " + idade + " anos");
alert(idade + idadedois);

console.log(nome);
console.log(idade);
console.log(frase);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.replace("Brasil","Japão"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1 * n2);

listas
var lista = ["maça", "pêra", "laranja"];
console.log(lista);
lista.push("uva");
console.log(lista);
lista.pop("uva");
console.log(lista);
lista.push("uva");
console.log(lista.length);
console.log(lista.reverse());
console.log(lista[0]);
console.log(lista.toString());
console.log(lista[0].toString());
console.log(lista.join(" | "));

//dicionarios
var dicFruta = {nome: "maça", cor:"vermelha"}
console.log(dicFruta.nome);
alert(dicFruta.cor);

var fruta = [{nome: "maça", cor:"vermelha"},{nome: "maça", cor:"vermelha"}]
console.log(fruta);
alert(fruta[1].nome);

//decisão
var idade = prompt("qual a sua idade: ")

if(idade >= 18)
{
    alert("maior de idade");
}
else
{
    alert("menor de idade");
}

//repetição
var count = 0;
while(count <= 5 )
{
    console.log(count);
    count++; // count = count +1
}

var count;
for(count = 1 ; count <=5 ;count++)
{
 console.log(count);
 alert(count);
}



var d = new Date();
alert(d.getDate());
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());

*/

// funções
function soma(n1 , n2)
{
    return n1+ n2;
}


function setReplace(frase, nome, novo_nome)
{
    return frase.replace(nome,novo_nome)
}

function validaIdade(idade)
{
    var validar;
    if (idade >= 18)
    {
        validar = true 
    }
    else
    {
        validar = false 
    }
    return validar;
}

var idade = prompt("Qual a sua idade: ");
console.log(validaIdade(idade));

//alert("soma: " + soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));


