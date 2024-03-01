// Assignment Tasks 1 to 15

// 2nd Task
let personName: string ="Eric"
console.log(`Hello ${personName}, would you like to learn some python today?`);

// 3rd task
let personName1: string ="Asim Jutt";
// in lowercase
console.log("lowercase:", personName1.toLocaleLowerCase(),);
// in Uppercase
console.log("Uppercase:", personName1.toUpperCase(),);
// title case
console.log("tilecase:",`"${personName1}"`);

//4th task
let quote: string = "A person who never made a mistake never tried anything now";
let author:string ="Albert Einsten";
console.log (`${author} once said,"${quote}" `);


//5th task
// let quote1: string = "A person who never made a mistake never tried anything now";
// let author2:string ="Albert Einsten";
console.log (`${author} once said,"${quote}"`);
let famous_person:string ="Albert Einstien";
let message1: string = `${famous_person} once said,${quote}`;  
console.log(message1);


//6th task
let personName2:string=`\t\n John Doe \n\t`;
console.log("original:",personName2);
console.log("Stripped:",personName2.trim());



//7th & 8th task
const additionResult = 5 + 3;
console.log("Addition:", additionResult);

// Subtraction
const subtractionResult = 10 - 2;
console.log("Subtraction:", subtractionResult);

// Multiplication
const multiplicationResult = 4 * 2;
console.log("Multiplication:", multiplicationResult);

// Division
const divisionResult = 16 / 2;
console.log("Division:", divisionResult);


//9th task

let favoriteNumber: number = 4;
let message: string = `My favorite number is ${favoriteNumber}.`;
console.log(message);


// 10th task

// author:[Asim jutt];
// Date:[Sunday, 25, 2024];

// Task 10
let task10:String="After run the program 10 task will be completed"
// Here is the result
console.log(task10);
console.log("bravooo");

// Task11
let names1: string[] = ["Qaim", "Hasnain", "Kashif", "Saeed", "Toseer"];
console.log(names1[0]);
console.log(names1);


//Task12


let newnames: string[] = ["Qaim", "Hasnain", "Kashif", "Saeed", "Toseer"];
let greetingMessage: string = "Hello,  how are you? ";

console.log("Greetings:");
console.log(greetingMessage + newnames[0]);
console.log(greetingMessage + newnames[1]);
console.log(greetingMessage + newnames[2]);
console.log(greetingMessage + newnames[3]);
console.log(greetingMessage + newnames[4]);

//Task13

let favoriteTransportations: string[] = ["Sportage car","Honda motorcycle","Tesla Model S"];
let favoritecars:string[]=favoriteTransportations.map((items)=>`I would like to my own ${items})`);
console.log(favoritecars)

//Task14
let guest: string[]=['Qasim', 'Kashif', 'Hasnain'];
let guestinvited:string[]=guest.map((items=>`Dear ${guest}, you are cordially invited to dinner at my place.`));
console.log(guestinvited)

//Task15
let guestarr: string[]=['Qasim', 'Kashif', 'Hasnain'];
let cannotattend: string ="Kashif";
console.log(cannotattend  +" can not attend the dinner")
let newguest:string="Hashmi";

// guestarr[1]=newguest
// console.log(guestarr)
guestarr[guestarr.indexOf(cannotattend)]=newguest
console.log(guestarr)

let newinvitided: string[]=guestarr.map((items)=>`Dear ${items} you are cordially invited to dinner at my place`);
console.log(newinvitided)

