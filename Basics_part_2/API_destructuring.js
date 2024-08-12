const student={
    s_id:"22MCR004",
    S_name:"Aman Raj",
    email:"aman@gmail.com",
    dept:"MCA",
    session:"2023-24"
}

//for make the clean code we have to go through this way to display the student data

const {S_name,email,dept,session}=student

console.table([S_name,email,dept,session])
/*
 ____________________________
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 'Aman Raj'       │
│ 1       │ 'aman@gmail.com' │
│ 2       │ 'MCA'            │
│ 3       │ '2023-24'        │
|____________________________|
*/

//we can modify the value name as for our comfort
const {
    S_name:name,
    email:mail,
    dept:department,
    session:year
}=student

console.table([name,mail,department,ye]);

/*
 ____________________________
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 'Aman Raj'       │
│ 1       │ 'aman@gmail.com' │
│ 2       │ 'MCA'            │
│ 3       │ '2023-24'        │
|____________________________|
*/