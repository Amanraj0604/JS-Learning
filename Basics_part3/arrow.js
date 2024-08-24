// this is use to refer the current contest

const user={
    userName:"Aman Raj",
    password:"aman",

    message:function(){
        console.log(`name is ${this.userName} and password is ${this.password}`);
        // console.log(this);  
    }
}

user.message()
// console.log(this);// it print {} empty object

function chaii()
{
    console.log(this);// it print this in details
    
}
// chai()

//-------------- Arrow Function -----------------
//this is the genral way to write a function
// const chai=function(){

// }
//arrow function
const chai=()=>{

}

//syntax of arrow function

()=>{}

//holding in a variable

const arrowFunction = () =>{
    
}
const arrowFunction2 = (num1,num2) =>{
    return num1+num2;
}

console.log(arrowFunction2(5,8))

//implecete return with the help of arrow function

const impleceteFunction=(num1,num2)=> num1+num2;

// console.log(impleceteFunction(10,20))

const objectRetuen=(num1,num2)=>({userName:"AmanRaj"})
console.log(objectRetuen(4,6));
