const numArr=[1,2,3,4,5,6,7,8,9];

// const result=numArr.reduce((acc,curval)=>
// {
//     // console.log(`accumulator= ${acc} and currentvalue= ${curval}`);
    
//     return acc+curval;
// },0)
//Arrow functions
const result=numArr.reduce((acc,cur)=>(acc+cur));
console.log(result);
