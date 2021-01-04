const pets = 
[
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
];

const newPets = pets.filter((pet) => {
    return pet.age < 5

});

const eMenorQueCinco = (numero) => {return numero < 5}
const newPets2 = pets.filter((pet) => {return eMenorQueCinco(pet.age)});
const newPets3 = pets.filter(({ age }) => eMenorQueCinco(age))

console.log(pets);
console.log("- ".repeat(20));
console.log(newPets3);
