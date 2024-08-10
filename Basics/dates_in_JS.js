console.log(Date());//Sat Aug 10 2024 12:07:16 GMT+0000 (Coordinated Universal Time)

let date=new Date()
console.log(date);//2024-08-10T12:08:52.550Z
console.log(date.toString());//Sat Aug 10 2024 12:09:56 GMT+0000 (Coordinated Universal Time)

console.log(date.toDateString());//Sat Aug 10 2024
console.log(date.toLocaleString());// 8/10/2024, 12:13:46 PM
console.log(typeof date);//object

//Assign date to a variable

let todaye_date=new Date(2024,0,1);
console.log(todaye_date);//2024-01-01T00:00:00.000Z
console.log(todaye_date.toString());//Mon Jan 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

let todate=new Date(2024,12,1);
console.log(todate);//2025-01-01T00:00:00.000Z
console.log(todate.toString());//Wed Jan 01 2025 00:00:00 GMT+0000 (Coordinated Universal Time)

let dob=new Date("2001-06-17")
console.log(dob.toDateString());//Sun Jun 17 2001





