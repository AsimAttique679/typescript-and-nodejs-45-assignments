"use strict";
// Assignment Tasks 26 to 35
// Task26
let alien_color3 = 'green';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}
let alien_color4 = 'red';
if (alien_color4 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}
// Task27
let alien_color5 = 'green';
if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color5 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
let alien_color6 = 'yellow';
if (alien_color6 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color6 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
let alien_color7 = 'red';
if (alien_color7 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color7 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// Task28
let age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Task29
// Array of favorite fruits
let favorite_fruits = ["Apple", "Mango", "Banana"];
// Check for specific fruits using independent if statements
let fruitToCheck = "Apple";
if (favorite_fruits.includes(fruitToCheck)) {
    console.log(`${fruitToCheck} is one of my favorite fruits!`);
}
fruitToCheck = "Orange";
if (favorite_fruits.includes(fruitToCheck)) {
    console.log(`${fruitToCheck} is one of my favorite fruits!`);
}
else {
    console.log(`${fruitToCheck} is not one of my favorite fruits.`);
}
fruitToCheck = "Mango";
if (favorite_fruits.includes(fruitToCheck)) {
    console.log(`${fruitToCheck} is one of my favorite fruits!`);
}
fruitToCheck = "Grapes";
if (favorite_fruits.includes(fruitToCheck)) {
    console.log(`${fruitToCheck} is one of my favorite fruits!`);
}
else {
    console.log(`${fruitToCheck} is not one of my favorite fruits.`);
}
// Task30
let usernames = ["admin", "Asim", "Qasim", "Hasnain", "Kashif", "Hashmi"];
// Loop through the array and print greetings
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// Task31
let newusernames = ["Asim", "Qasim", "Hasnain", "Kashif", "Hashmi", "admin"];
// Check if the list of users is not empty
if (newusernames.length === 0) {
    for (let users of newusernames) {
        if (users === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${users}, thank you for logging in again.`);
        }
    }
}
console.log(newusernames);
if (newusernames.length === 0) {
    console.log("we need to find some users");
}
// Task32
let current_users = ["Ali", "kashif", "hamza", "Qasim", "toseer"];
// List of new users
let new_users = ["kashif", "hashmi", "Ali", "Ahmad", "saeed"];
let current_users_lowercase = current_users.map((userName => userName.toLowerCase()));
for (let users of new_users) {
    if (current_users_lowercase.includes(users.toLocaleLowerCase())) {
        console.log(`sorry ${users}, that name is taken`);
    }
    else {
        console.log(`Yes ${users},is still available in list`);
    }
}
//    Task33
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let Number of Numbers) {
    let ordinalEnding;
    if (Number === 1) {
        ordinalEnding = "st";
    }
    else if (Number === 2) {
        ordinalEnding = "nd";
    }
    else if (Number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${Number}${ordinalEnding}`);
}
//    Task34
let pizzas = ["Chicken Fajita", "Tikka Boti", "Pepperoni"];
for (let pizza of pizzas) {
    console.log(pizza);
}
for (let pizza of pizzas) {
    console.log(`I like ${pizza.toLowerCase()} pizza.`);
}
console.log("I really love pizza!");
//    Task35
let animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal
console.log("Animals:");
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
console.log("Characteristics of the animals:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
