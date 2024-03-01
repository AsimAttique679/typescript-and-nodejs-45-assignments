// Assignment Tasks 16 to 25

// Task 16
let newguestArr: string[]=["Qasim","kashif","Hashmi", "Hasnain"];
let canNotattend: string= "kashif";
let newMember: string="Saeed";
 newguestArr[newguestArr.indexOf(canNotattend)]=newMember
// console.log(newguestArr)

//newguestArr.map((items)=>console.log(`Dear ${items}, I found a bigger dinner table so I'm invited more people `));
let guestaddbeg:string="Hamza"
 newguestArr.unshift(guestaddbeg)
//  console.log( newguestArr)

 let guestaddmidlle: String = "Hammad"
 let midleIndex= newguestArr.length/2;
 newguestArr.splice(midleIndex,0,'guestaddmidlle')
//  console.log(newguestArr)

 newguestArr.push("Mohsin")
//  console.log(newguestArr)

newguestArr.map((items)=>console.log(`Dear ${items}, you are invited because your name in my invite list`));

// Task17

let guestsList: string[] = ["Qasim", "Kashif", "Hashmi", "Hasnain", "Saeed"];

// Remove guests until only two names remain
while (guestsList.length > 2) {
    const removedGuest = guestsList.pop();
    if (removedGuest) {
        console.log(`Sorry ${removedGuest}, you're no longer invited to dinner.`);
    }
}

// // Send invitations to the remaining guests
console.log("Sending invitations...");
 guestsList.map((items)=>console.log(`Dear ${items}, you are still invited to dinner.`));
     

// Remove the last two names
 guestsList.splice(0, 2);

// // Confirm the list is empty
console.log("Updated guest list is empty:", guestsList);


//Task18

// Array of places to visit
let placesToVisit: string[] = ["Karachi", "Balouchistan", "America", "Hyderabad", "Mirpurkas"];

// Print original array
console.log("Original order:", placesToVisit);

// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Verify the original array is unchanged
console.log("Original order:", placesToVisit);

// Print array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Verify the original array is unchanged
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

// Task19
let GuestsList: string[] = ["Qasim", "Kashif", "Hashmi", "Hasnain", "Saeed"];

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${GuestsList.length}`);


// Task20
let countries: string[] = ["Pakistan", "China", "Japan", "India", "Dubai"];

// Print the list of countries
console.log("List of countries:");
console.log(countries);


// Task21
let person= {
    name: "Asim",
    fName: "AttiqueUllah",
    age: 24,
    education:"Graduation"
    };

console.log("Information about persons:");
console.log(person)

// Task22
let fruits = ["apple", "banana", "orange"];

// Intentionally access an index that doesn't exist
console.log(fruits[3]); // This will cause an index error because there is no element at index 3

// Correcting the error
console.log(fruits[2]); // Accessing the third element of the array (index 2), which is "orange"

// Task23
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda'); // True

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False

console.log("Is car > 'ford'? I predict True.");
console.log(car > 'ford'); // True

console.log("Is car < 'honda'? I predict False.");
console.log(car < 'honda'); // False

console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6); // True

console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su')); // True

// Task24


let color="orange"
console.log("Is color =='orange'? I predict true")
console.log(color=="orange")// True

let fruit = 'apple';
console.log("Is fruit != 'apple'? I predict false.");
console.log(fruit != 'apple'); 

// Tests using the lower case function
let city = 'New York';
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // True

let country = 'USA';
console.log("Is country.toLowerCase() == 'usa'? I predict False.");
console.log(country.toLowerCase() == 'usa'); // False

// Numerical tests
let x = 10;
let y = 5;

console.log("Is x == 10 and y == 5? I predict True.");
console.log(x == 10 && y == 5); // True

console.log("Is x < y? I predict False.");
console.log(x < y); // False

console.log("Is x <= 10 or y != 5? I predict True.");
console.log(x <= 10 || y != 5); // True

// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];
console.log("Is 3 in the array? I predict True.");
console.log(numbers.includes(3)); // True

let names = ['Alice', 'Bob', 'Charlie'];
console.log("Is 'Dave' not in the array? I predict True.");
console.log(!names.includes('Dave')); // True

//Task25

let alien_color = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

let alien_color2:string="red"

if (alien_color === 'green') {
    console.log("No output");
}