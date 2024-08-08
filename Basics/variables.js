const empId=9092
let empName="Hitesh Kuamr"
var empCity="Jaipur"
//plese avoide to use var becouse of issue in block scope and functional scope
phoneNo=6202384284
let empState;
//empId=7878 we cant modify the the value of const datatype besouse it's a constant variable

// console.log(empId);

console.table([empId,empName,empCity,phoneNo]);

empName="Anshu"
empCity="Delhi"
phoneNo=9310462052

console.table([empId,empName,empCity,phoneNo,empState]);
