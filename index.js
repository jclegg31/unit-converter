/*
1 meter = 3.281 feet // input x feet // input / feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;

//grab button
const convertBtn = document.querySelector('.convertBtn');

//get input user entered
const userInputEl = document.getElementById('number-to-convert');

//get spans to update with conversions
const inputNum = document.querySelectorAll('.input');
//console.log(inputNum);

const lengthFeetOutput = document.querySelector('.length-feet');
const lengthMetersOutput = document.querySelector('.length-meters');

const volumeGallonsOuput = document.querySelector('.volume-gallons');
const volumeLiterssOuput = document.querySelector('.volume-liters');

const massPoundsOutput = document.querySelector('.mass-pounds');
const massKilosOutput = document.querySelector('.mass-kilos');

//add Event listener so when clicked will do conversion
convertBtn.addEventListener('click', function () {
  //check so it's numbers only that can be entered and
  //post a warning if not a number
  if (checkForNumOnly(userInputEl)) {
    //iterate through NodeList from QuerySelectorAll
    for (let i = 0; i < inputNum.length; i++) {
      //get number from input and plug it into each span as the number
      //we are converting
      inputNum[i].textContent = userInputEl.value;
    }

    //take number and do coversions then update DOM
    lengthFeetOutput.textContent = metersToFeet(userInputEl.value);
    lengthMetersOutput.textContent = feetToMeters(userInputEl.value);
    volumeGallonsOuput.textContent = litersToGallons(userInputEl.value);
    volumeLiterssOuput.textContent = gallonsToLiters(userInputEl.value);
    massPoundsOutput.textContent = poundsToKilos(userInputEl.value);
    massKilosOutput.textContent = kilosToPounds(userInputEl.value);
  }
});

function checkForNumOnly(userInputEl) {
  if (!isNaN(userInputEl.value)) {
    return true;
  } else {
    alert('Please enter a number');
    return false;
  }
}

function metersToFeet(value) {
  return (metersToFeet = (value * meter).toFixed(3));
}

function feetToMeters(value) {
  return (feetToMeters = (value / meter).toFixed(3));
}

function litersToGallons(value) {
  return (litersToGallons = (value * liter).toFixed(3));
}

function gallonsToLiters(value) {
  return (gallonsToLiters = (value / liter).toFixed(3));
}

function poundsToKilos(value) {
  return (poundsToKilos = (value * kilogram).toFixed(3));
}

function kilosToPounds(value) {
  return (kilosToPounds = (value / kilogram).toFixed(3));
}
