// Syntax of function

// function keword and work is the function name  
function work(){
    console.log("first function");
}
// work();// function calling


//work :-function refrence
//work() :- function calling


//example 2

function addTwoNumber(num1,num2){
   // console.log(num1+num2);
   return num1+num2
    
}

addTwoNumber(8,9)//17

const result=addTwoNumber(6,8)//14

console.log(result)//undefined

// Note :- when we return the added value from function then it assign the value in result variable and print the correct output

//  rest operator in js(...)

function calclutePrice(...num)
{
    return num;
}
let data=calclutePrice(200,300,400,600)
console.log(data);

//how to pass a object i a functon

const user={
    userName:"Aman",
    price:4000
}
function userF(anyObject){
    console.log(`User Name is ${anyObject.userName} and price is ${anyObject.price}`);
    
}
userF(user);