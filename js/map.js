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

const forEachPetNames = []
pets.forEach((pet) => {return forEachPetNames.push(pet.name)});

const petNames = pets.map((pet) => { return pet.name});


console.log("- ".repeat(20));
//console.log(pets);
//console.log(petNames);
console.log(forEachPetNames);
