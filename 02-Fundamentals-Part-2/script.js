'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) {
//   console.log('I can drive');
// }


// function logger() {
//   console.log('My name is Minh Kiet');
// }
// //Caling / Running / Invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// console.log(fruitProcessor(5, 0));

// const num = Number('23');
// console.log(typeof (num));


//Function Declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age1 = calcAge1(2002);

//Function Expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// }
// const age2 = calcAge2(2002);

// console.log(age1, age2);


//Arrow Function
// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2040 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearUntilRetirement(2002,'Kiet'));
// console.log(yearUntilRetirement(2003,'Meo'));


function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} piece of orange.`;
  return juice;
}

console.log(fruitProcessor(5, 10));