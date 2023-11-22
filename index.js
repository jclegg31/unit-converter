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
let userInputEl = document.getElementById('number-to-convert');

//get spans to update with conversions
let inputNum = document.querySelectorAll('.input');
//console.log(inputNum);

let lengthFeetOutput = document.querySelector('.length-feet');
let lengthMetersOutput = document.querySelector('.length-meters');

let volumeGallonsOuput = document.querySelector('.volume-gallons');
let volumeLiterssOuput = document.querySelector('.volume-liters');

let massPoundsOutput = document.querySelector('.mass-pounds');
let massKilosOutput = document.querySelector('.mass-kilos');

//add Event listener so when clicked will do conversion
convertBtn.addEventListener('click', function () {
  //check so it's numbers only that can be entered and
  //post a warning if not a number
  checkForNumOnly(userInputEl);

  //iterate through NodeList from QuerySelectorAll
  for (let i = 0; i < inputNum.length; i++) {
    //get number from input and plug it into each span as the number
    //we are converting
    inputNum[i].textContent = userInputEl.value;
  }

  //take number and do coversions then update DOM
  metersToFeet();
  feetToMeters();
  litersToGallons();
  gallonsToLiters();
  poundsToKilos();
  kilosToPounds();
});

function checkForNumOnly(userInputEl) {
  if (!isNaN(userInputEl.value)) {
    return;
  } else {
    alert('Please enter a number');
  }
}

function metersToFeet() {
  let metersToFeet = userInputEl.value * meter;
  lengthFeetOutput.textContent = metersToFeet.toFixed(3);
}

function feetToMeters() {
  let feetToMeters = userInputEl.value / meter;
  lengthMetersOutput.textContent = feetToMeters.toFixed(3);
}

function litersToGallons() {
  let litersToGallons = userInputEl.value * liter;
  volumeGallonsOuput.textContent = litersToGallons.toFixed(3);
}

function gallonsToLiters() {
  let gallonsToLiters = userInputEl.value / liter;
  volumeLiterssOuput.textContent = gallonsToLiters.toFixed(3);
}

function poundsToKilos() {
  let poundsToKilos = userInputEl.value * kilogram;
  massPoundsOutput.textContent = poundsToKilos.toFixed(3);
}

function kilosToPounds() {
  let kilosToPounds = userInputEl.value / kilogram;
  massKilosOutput.textContent = kilosToPounds.toFixed(3);
}
