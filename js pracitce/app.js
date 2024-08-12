// Question: Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)


// let teamA = prompt('Enter name of Team A')
// let aScore = +prompt("Enter score of Team A")
// let teamB = prompt('Enter name of Team B')
// let bScore = +prompt("Enter score of Team B")

// let Awin = aScore > bScore;
// let Bwin = aScore < bScore;
// let tie = aScore === bScore;

// if (Awin) {
//     console.log(teamA, "won the game!")
// } else if (Bwin) {
//     console.log(teamB, "won the game!")
// } else if (tie) {
//     console.log("It's a tie!")
// }






























// Question:  Take a string, a number and a Boolean in one variables. Write a program that checks the type of variables & responds accordingly

// let type = prompt('Enter something to ckeck type')
// let checkBoolean = type === "true" || type === 'false'

// if (!(isNaN(+type))) {
//     console.log(type, 'is a number');
// }
// else if (checkBoolean) {
//     console.log(type, 'is a boolean');
// }
// else {
//     console.log(type, 'is a string');
// }
















// Question: Write a program that checks whether the given input is an even number or an odd number.

// let num = +prompt('Enter a number')

// if (num % 2 === 0) {
//     console.log(num, 'is even')
// } else {
//     console.log(num, 'is odd')
// }


























// Question: Write a program that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3 languages. It should default to returning English. (Hint: use translate.google.com to check the translation of hello world in different languages)

// let languageCode = prompt("Enter language code (e.g. 'es', 'de', 'en'):");

// if (languageCode === 'es') {
//     console.log("Hola, Mundo");
// } else if (languageCode === 'de') {
//     console.log("Hallo, Welt");
// } else {
//     console.log("Hello, World"); // Default to English
// }














































// Question: Write a program to take input a number & tell whether it’s a positive or negative number.

// let num = +prompt('Enter number to check number is positive, negative or zero')
// console.log(Math.sign(num));
// if (Math.sign(num) === 1) {
//     console.log(num + ' is a positive number');
// }
// else if (Math.sign(num) === -1) {
//     console.log(num + ' is a negative number');
// }
// else {
//     console.log(num + ' is zero');
// }






























// var vowel = prompt("Enter A Vowel");

// if (vowel === "a" || vowel === "e" || vowel === "o" ||  vowel === "u" || vowel === "i") {
//     document.write("this is vowel");
// }else {
//     document.write("this is not vowel");
// }



























// calcius to faranheit and faranheit to calcius temperature convertor

// let  celTemp = +prompt("What Is Temperature In Celsius");
// let fahTemp = +prompt("What Is Temperature In Fahrenheit")
// let fahToCel = (fahTemp - 32) * 5 / 9
// let celToFah = (celTemp * 9 / 5) + 32;

// document.write(celTemp + "<sup>o</sup>C is " + celToFah + "<sup>o</sup>F <br />");
// document.write(fahTemp + "<sup>o</sup>F is " + fahToCel + "<sup>o</sup>C ");


































// Age calculator
// let birthYaer = prompt('Enter your birth year')
// let d = new Date()
// console.log(d.getFullYear());
// let age = d.getFullYear() - birthYaer;
// document.write("They are either " + age + ' or ' + (age + 1) + " years old");



















// The Geomitizer
// let radius = prompt('Enter radius of circle to find area and circumference of circle')
// let circumference = 2 * 3.142 * radius;
// document.write('The circumference is ' + circumference);

// let area = 3.142 * (radius * radius);
// document.write('The area is '+ area);

























// The lifetime supply calculator

// let snack = prompt('Enter your favourite snack')
// let snackAmmount = +prompt('Enter your snack ammount per day')
// let currAge = +prompt('Enter your age')
// let estimatedAge = +prompt('Enter your estimated maximum age')

// let days = (estimatedAge - currAge) * 365;
// let snacksAmmount = snackAmmount * days
// let snacks;

// if (snack.endsWith('s')) {
//     snacks = snack;
// } else {
//     snacks = snack + 's';
// }

// document.write('you will need ' + snacksAmmount + ' ' + snacks + ' to last you until the ripe old age of ' + estimatedAge);































// uppercase or lowercase letter or number checker
// let char = prompt('Enter a character (uppercase or lowercase letter or number)')
// if (!(isNaN(+char))) {
//     document.write('you enter a number')
// }
// else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//     document.write('You enter uppercase letter')
// }
// else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//     document.write('You enter lowercase letter')
// }



















