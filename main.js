const namePrint = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

const nuggetMaker = (animal) => {
    return `${animal} Nuggets`;
};

const dogMaker = (breed) => {
    return `My favorite dog breed is ${breed}`;
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint
};



let bandNumber = 1;
const addBand = (bandName) => {
    const bandText = `<p>${bandNumber}: ${bandName}</p>`;
    bandNumber = bandNumber + 1;
    printToDom('band-list', bandText);
};
addBand('Wardruna');
addBand('Year Of No Light');

printToDom('dogDiv', dogMaker('Border Collie'));
printToDom('nuggetDiv', nuggetMaker('Chicken'));

// let bandNumber=1;

// const addBand = () => {
//     printToDom(band-list, ??)
// }

// addBand('Metallica') //1. metalica

// const dogPaste = document.getElementById('dogDiv');

// const nuggetPaste = document.getElementById('nuggetDiv');

// namePrint('Keith', 'Walker');

// console.log(nuggetMaker('Chicken'));

// console.log(dogMaker('Border Collie'));

// console.log('dogPaste', dogPaste);

// dogPaste.innerHTML = `<h3> ${dogMaker('Border Collie')}</h3>`;

// nuggetPaste.innerHTML = `<h1>${nuggetMaker('Cow')}</h1>`;

//VERSION 1
// let bandNum = 0;

// const addBand = (bandName) => {
//     bandNum++
//     return `${bandNum}: ${bandName} <br>`;
// };

// printToDom('band-list', addBand('Slayer'));
// printToDom('band-list', addBand('Metallica'));