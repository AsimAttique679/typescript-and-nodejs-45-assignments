"use strict";
// Assignment Tasks 36 to 45
// Task 36
function make_shirt(size, message) {
    console.log(`Size of the shirt ${size}`);
    console.log(`Message printed on the shirt: ${message}`);
}
make_shirt("large", "I need medium shirt ");
// Task 37
function make_Shirt(size = "Large", message = "I love TypeScript") {
    console.log(`Size of the shirt: ${size}`);
    console.log(`Message printed on the shirt: ${message}`);
}
// Make a large shirt with default message
make_Shirt();
// medium shirt with default message
make_Shirt("Medium");
//  different message
make_Shirt("Small", "I need shirt for a party!");
// Task 38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Islamabad");
describe_city("Lahore");
describe_city("New York", "USA");
// Task39
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Tokyo", "Japan");
let city3 = city_country("Paris", "France");
// Print the returned values
console.log(city1);
console.log(city2);
console.log(city3);
// Task40
function make_album(artist, title, tracks) {
    return { artist, title, tracks };
}
// Call the function to create three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3", 8);
// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// Task41
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
let magician_names = ["Ali", "Hamza", "Hasnain", "saeed"];
// Call the function to show magician's names
show_magicians(magician_names);
// Task42
function show_magicians1(magicians1) {
    for (let Magicians1 of magicians1) {
        console.log(Magicians1);
    }
}
function make_great(magicians1) {
    return magicians1.map(magician1 => `the Great ${magician1}`);
}
// Array of magician's names
let magician_Names = ["Ali", "Hamza", "Hasnain", "saeed"];
// Call make_great to modify the array
magician_Names = make_great(magician_Names);
// Call the function to show modified magician's names
show_magicians1(magician_Names);
// Task43
function show_Magicians(MagicianS) {
    MagicianS.forEach(MagicianS => console.log(MagicianS));
}
function make_Great(maGicians) {
    return maGicians.map(maGician => `the Great ${maGician}`);
}
// Array of magician's names
let magicianNames = ["Ali", "Hamza", "Hasnain", "saeed"];
// Create a copy of the original array
let original_magicians = magicianNames.slice();
// Call make_great with a copy of the array
let great_magicians = make_Great(magicianNames.slice());
// Call the function to show the original magician's names
console.log("Original Magicians:");
show_Magicians(original_magicians);
console.log();
// Call the function to show the modified magician's names
console.log("Great Magicians:");
show_Magicians(great_magicians);
// Task 44
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log("- " + item));
    console.log("Sandwich is ready!\n");
}
// Call the function three times with different numbers of arguments
make_sandwich("Turkey", "Lettuce", "Tomato", "Mayo");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly");
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture, model }, optional);
}
const mycar = createCar("toyota", "corolla", { color: "black", year: "2024" });
console.log(mycar);
