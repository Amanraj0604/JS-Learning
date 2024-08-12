//Object literals
// Object.create  //singleton
let mysym=Symbol('Aman')//how to add this symbol type data in object
const user={
    name:"Aman",
    location:"delhi",
    [mysym]:"Aman Raj ji",
    email:"aman@google.com",
    isLogedin:false,
    lastLogin:["Mon","Fri"],
    "full name":"Aman Raj Tiwari"// how to access this value 
}
//accessing method og object

//1.
// console.log(user);

//2.
// console.log(user.name);

//3.
// console.log(user["email"]);

//Accessing full name 
// console.log(user.full name); it sowing error so we have to use 3rd mathod to access this data

// console.log(user["full name"]);//Aman Raj Tiwari


//displaying symbol type data.
// console.log(user[mysym]);//Aman Raj ji


//object.freeze

// user.location="Bihar"
// Object.freeze(user)//after using this method we can't able to modify the value of the object
// user.location="delhi"

// console.log(user);
// {
//     name: 'Aman',
//     location: 'Bihar',
//     email: 'aman@google.com',
//     isLogedin: false,
//     lastLogin: [ 'Mon', 'Fri' ],
//     'full name': 'Aman Raj Tiwari',
//     [Symbol(Aman)]: 'Aman Raj ji'
//   }



