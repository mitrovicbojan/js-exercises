let js = 'amazing';
let firstName = "Jonas";
console.log(firstName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25-10-5;
console.log(x,y);

const avrageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, avrageAge)

chalenge #1

const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const bodyMassMark = weightMark / heightMark ** 2;
const bodyMassJohn = weightJohn / heightJohn ** 2;

const markHigherBMI = bodyMassMark > bodyMassJohn;
console.log(bodyMassMark, bodyMassJohn, markHigherBMI)

strings and template literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;

console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew)


taking decision

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years`)
}

chalenge #2
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const bodyMassMark = weightMark / heightMark ** 2;
const bodyMassJohn = weightJohn / heightJohn ** 2;

if (bodyMassMark > bodyMassJohn) {
    console.log(`Marks body mass ${bodyMassMark} is greater than Johns body mass of ${bodyMassJohn}`)
} else {
    console.log(`Johns body mass ${bodyMassJohn} is greater than Marks body mass of ${bodyMassMark}`)
}

type conversion and coercion

const inputYear = '1991'
console.log(Number(inputYear))
console.log(Number(inputYear) + 18)

console.log(String(23))

falsy and truthy
falsy values: 0, '', undefined, null, NaN

const money = 100;
if (money) {
    console.log("dont spend it all")
} else {
    console.log("get a job")
}

let height = 0;
if(height) {
    console.log("yay")
} else {
    console.log('it undefined')
}

Equality 

const age = 18;
if(age === 18) console.log('adult')

const favorite = Number(prompt("whats your favorite number"))
console.log(favorite)

if (favorite === 23) {
    console.log('cool')
} else if(favorite === 7) {
    console.log("great")
} else {
    console.log("not 23 nor 7")
}

Logical operators

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision

if (shouldDrive) {
    console.log('sarah should druive')
} else {
    console.log('someone esle shold drive')
}

const isTierd = false;
console.log(hasDriverLicense || hasGoodVision || isTierd);

if (hasDriverLicense && hasGoodVision && !isTierd) {
    console.log('sarah should druive')
} else {
    console.log('someone esle shold drive')
}

challenge #3

const dolphinsFirstScore = 97;
const dolphinsSecondScore = 112;
const dolphinsThirdScore = 101;

const avarageDoplhins = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;

const koalasFirstScore = 109;
const koalasSecondScore = 95;
const koalasThirdScore = 106;

const avrageKoalas = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;

if (avarageDoplhins >= 100 && avarageDoplhins > avrageKoalas || avarageDoplhins <= 100 && avarageDoplhins > avrageKoalas) {
    console.log("Dolphins Won")
} else if (avrageKoalas >= 100 && avrageKoalas > avarageDoplhins || avrageKoalas <= 100 && avrageKoalas > avarageDoplhins) {
    console.log("Koalas Won")
} else if (avarageDoplhins === avrageKoalas && avarageDoplhins <= 100 && avrageKoalas <= 100) {
    console.log("no trophy")
} else if (avrageKoalas === avarageDoplhins) {
    console.log("Draw")
}

const number = 123.99;
const numberTwo = number - (number / 100)*10
const numberThree = numberTwo - (numberTwo / 100)*22
console.log(numberTwo)
console.log((number / 100)*10)
console.log(numberThree)

switch statemesnts

const day = 'wednesd';
switch(day) {
    case 'monday': // day === 'monday'
        console.log('plan something');
        console.log('do something else');
        break;
    case 'tuesday':
        console.log('prepare');
        console.log('maybe');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write something');
        break;
    case'friday':
    console.log('go out');
    break;
    default:
        console.log('not valid');
}

The Conditional Ternary Operator

const age = 15;
age >= 18 ? console.log('i like this') : console.log('hi there');

Coding Challenge #4

const bill = 500;

const tip = bill >= 50 && bill <= 300 ? (bill / 100)*15 : (bill / 100)*20

console.log(`The bill was ${bill} and the tip was ${tip} and the total value ${bill + tip}`)
