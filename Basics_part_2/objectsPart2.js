//how to make as singleton 
//how to make with cunstructor 

//singleton object
const tinderUser=new Object()//{}

//Nonsingleton object

const user={
    name:"Aman",
    email:"aman@gmail.com",
    isLogedIn:false
}
const user2={
    city:"bettiah",
    pin:845438
}

//combine both users

const finalUser=Object.assign({},user,user2)

console.log(finalUser);

const finalUser2={...user,...user2}
console.log(finalUser2);



//for printing the key of object
console.log(Object.keys(user));

//For printing only the value of object 
console.log(Object.values(user));

//[ 'name', 'email', 'isLogedIn' ]
// [ 'Aman', 'aman@gmail.com', false ]

//To make each and every value as array 

console.log(Object.entries(user));

/*
[
  [ 'name', 'Aman' ],
  [ 'email', 'aman@gmail.com' ],
  [ 'isLogedIn', false ]
] 
  */

//asking about is somthing is present or not

console.log(user.hasOwnProperty('isLogedIn'));
//true

console.log(Object.valueOf( user2));
