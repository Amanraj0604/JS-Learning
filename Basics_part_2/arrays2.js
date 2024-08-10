const arr_num=[1,2,3,4,5]
const arr_str=["aman","ramnan","rajesh"]

// arr_num.push(arr_str)

// console.log(arr_num);//[ 1, 2, 3, 4, 5, [ 'aman', 'ramnan', 'rajesh' ] ] it's dirctly pushed one array to 2nd array as a element

//ex
// console.log(arr_num[5]);//[ 'aman', 'ramnan', 'rajesh' ]
// console.log(arr_num[5][0]);//'aman'

//For mearging both array we have ton use concat() method it is not going to update in the main array we have to concatinate both array and copy in to another variable 

//example

const final_array=arr_num.concat(arr_str)
// console.log("a",final_array);//a [ 1, 2, 3, 4, 5, 'aman', 'ramnan', 'rajesh' ]

//There is one mode way to add two or more than two array that is called ...arr1(spread operator)
//example
const combine_arr=[...arr_num,...arr_str]
// console.log(combine_arr);//[ 1, 2, 3, 4, 5, 'aman', 'ramnan', 'rajesh' ]

// console.log(...arr_num);//1 2 3 4 5


// const num_arr=[1,3,4,5,[5,6],7,8,9,[6,55,11,[3,65,98]]]

// console.log(num_arr);//[ 1, 3, 4, 5, [ 5, 6 ], 7, 8, 9, [ 6, 55, 11, [ 3, 65, 98 ] ] ]

// console.log(num_arr.flat(1));//[ 1, 3, 4, 5, 5, 6, 7, 8, 9, 6, 55, 11, [ 3, 65, 98 ] ]

// console.log(num_arr.flat(Infinity));
// [
//     1,  3,  4, 5,  5,  6,
//     7,  8,  9, 6, 55, 11,
//     3, 65, 98
//   ]



let name="Aman"

console.log(Array.from(name));//[ 'A', 'm', 'a', 'n' ]

let x=10
let y=20
let z=30

console.log(Array.of(x,y,z));//[ 10, 20, 30 ]

