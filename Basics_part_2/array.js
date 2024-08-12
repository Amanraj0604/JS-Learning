//Array is an orderd collection of data either it's primitive or objects dependa on     multiple language.
//Array is use to store multiple values under a single variable.
const arr1=[1,2,3,4,5,6,7,8,9];
// Note:-1. Java Script arrays are resizeble and contains multiple type of elements.

//2. Javascript array provide sallow copies operation means when we copy a array and modify the value of array it update in both array .

// arr1.forEach(element => {
//     console.log(`arr1 ${element}`);
    
// });
// console.log("***********************");


// arr2=arr1;
// arr2[0]=6
// arr1.forEach(element => {
//     console.log(`arr1 ${element}`);
        
// });
// console.log("*****************");

// arr2.forEach(element => {
//     console.log(`arr2 ${element}`);
        
// });

// ***********Output of sallow copies
// arr1 1
// arr1 2
// arr1 3
// arr1 4
// arr1 5
// arr1 6
// arr1 7
// arr1 8
// arr1 9
// ***********************
// arr1 6  also update in arr1
// arr1 2
// arr1 3
// arr1 4
// arr1 5
// arr1 6
// arr1 7
// arr1 8
// arr1 9
// *****************
// arr2 6
// arr2 2
// arr2 3
// arr2 4
// arr2 5
// arr2 6
// arr2 7
// arr2 8
// arr2 9


//____________________ARRAY DECLERATION_______________________
//String type array
// const myArray=["aman","pooja","path"]
//Number type Array
// const myArray1=[1,2,3,4,5]
// Mixed Array
// function myfun() {
//     return "Happy Rakchhabandhan ---~:{:(@):}:~---"
// }
// const myArray2=['aman',6,myfun(),"rakesh"]

// console.log(myArray2[2]);//Happy Rakchhabandhan ---~:{:(@):}:~---

// const myArray3=new Array(1,2,3,4,5,6)

// console.log(myArray3[3]);//4



//__________________ARRAY METHODS_____________________


let arr=[1,5,6]


// arr.push("Jay Shree Ram")
// arr.pop()//remove last elements 

// arr.unshift("Aman raj")//[ 'Aman raj', 1, 5, 6 ]
// arr.shift()//[ 1, 5, 6 ]

// console.log(arr.includes(1));//true becouse 1 is present in arr
//console.log(arr);

const id=[52,35,69,74,56]

console.log("A",id);

console.log(id.slice(1,3));

console.log("B",id);

console.log(id.splice(1,3));

console.log("C",id);

// output and deference of slice and splice method
// A [ 52, 35, 69, 74, 56 ]
// [ 35, 69 ]
// B [ 52, 35, 69, 74, 56 ]
// [ 35, 69, 74 ]
// C [ 52, 56 ]


