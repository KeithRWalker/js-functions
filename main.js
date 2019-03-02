const namePrint = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

const nuggetMaker = (animal) => {
    return `${animal} Nuggets`;
};

const dogBreed = (breed) => {
    return `My favorite dog breed is ${breed}`;
};

namePrint('Keith', 'Walker');

console.log(nuggetMaker('Chicken'));

console.log(dogBreed('Border Collie'));