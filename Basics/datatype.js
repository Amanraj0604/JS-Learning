"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedInn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//************************* Memory*************************
//Type of memory
    // stack :-used in (Primitive datatypes)
    // Heap  :- used in (Non-primitive datatypes)


//Example of stack

let Myname="Aman"; //Aman

let Oname=Myname;//we just assign a copy of Myname variable;
Oname="Anshu";//Anshu

console.table([Myname,Oname]);

//Example of heap

let user={
    name:"Aman",
    email:"aman@gmail.com",
}

let user2=user //just give the same refrence 

user2.email="anshu@gmail.com"

console.table([user.email,user2.email]);

// Hear Output is anshu@gmail.com for both becouse both the user refer the same heap memory 
