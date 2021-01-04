const pets = 
[
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },

    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },

    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },

    {
        type: 'cat',
        name: 'marron',
        age: 2,
        weight: 1
    },

    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },

    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 500
    }
]

const totalWeight = pets.reduce((total, pet) => {
    //console.log(`Total: ${total}`);
    //console.log(`Pet: ${pet.name}`);
    return total + pet.weight
}, 0);
//console.log(`Total: ${totalWeight}`);
//console.log(totalWeight);

const totalWeight2 = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, {totalAge: 0, totalWeight: 0});

const totalWeight3 = pets.reduce((total, pet) => {
    if(pet.type !== 'dog') return total

    return total + pet.weight
}, 0);

const totalWeight4 = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0);

const dogs = pets.filter((pet) =>{
    return pet.type === "dog"
});

console.log(dogs);

