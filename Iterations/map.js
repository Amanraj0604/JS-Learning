const myNum=[1,2,3,4,5,6,76,8,9,]
// simple map function
//  const newNums=myNum.map((num=>num+10));
//  console.log(newNums);
 
//channing method
const newNums=myNum.map((num)=>num*10).map((num1)=>num1+1).map((x)=>x-1).filter((num)=>num>100);
console.log(newNums);
