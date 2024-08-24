// iife means immedetly invoked function 

// function chai(){
//     console.log("DB connected");
// }
// chai();

// this is iife
// this is named iife becouse chai is the name if this iife function
(function chai(){
    console.log("DB connected");
})();

//
((name)=>{
    console.log(`${name} is connected`);
    
})("Aman")

