const namePrint = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

const nuggetMaker = (animal) => {
    return `${animal} Nuggets`;
};

const dogBreed = (breed) => {
    return `My favorite dog breed is ${breed}`;
};

const dogBreedDiv = document.getElementById('dogDiv');

console.log('dogBreedDiv', dogBreedDiv);

namePrint('Keith', 'Walker');

console.log(nuggetMaker('Chicken'));

console.log(dogBreed('Border Collie'));