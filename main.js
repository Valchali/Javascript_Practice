// String concatenation, binary +

let s = "Chali" + "Andrew";
alert = (s);

console.log(alert)

// Numeric conversion, unary +

let x = 1;
alert = (+x);
console.log(alert)

let y = -2;
alert = (+y);
console.log(alert)


// The need to convert strings to numbers arises very often. For example, if we are getting values
// from HTML form fields, they are usually strings.
// What if we want to sum them?
// The binary plus would add them as strings:

let apples = "2";
let oranges = "3"; 
alert = (apples + oranges);
console.log(alert)


// If we want to treat them as numbers, we need to convert and then sum them:

let cars = "2";
let trucks = "3"; 
alert = (+apples + +oranges);
console.log(alert)

// Assigment
let v = 2 * 2 + 1;
alert = (x)
console.log(alert)

// Chain Assigment
let a, b, c;
a = b = c = 2 + 2;
alert = (a);
alert = (b);
alert = (c);
console.log(alert)

