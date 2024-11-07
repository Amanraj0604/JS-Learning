// For off Loop

        // const arr=['Aman','shubham','Rajesh','Raman'];
        // for (const value of arr) {
        //     console.log(value);
            
        // }

//Map 
 const countries=new Map();
 countries.set('IN','India')
 countries.set('USA','United State Of India')
 countries.set('FR','France')

//  console.log(countries);

// for (const key of countries) {
//         console.log(key[1]);
        
// }
// for (const [key,value] of countries) {
//         console.log(key,':-',value);
// }

// Itteration of a object
        // const obj = { a: 1, b: 2, c: 3 };

        // Object.entries(obj).forEach(([key, value]) => {
        // console.log(key, value);
        // });

//For In Loop
let Languages={
        cpp:"CPP",
        Py:"Python",
        Js:"JavaScript",
        rb:"Ruby"
}

for (const key in Languages) {
//        console.log(`${key} ka full from hai ${Languages[key]}`);
// console.log(key);

       
}

let program=['java','c','cpp','python']

// program.forEach(function(item){
//         console.log(item);
        
// })

// program.forEach((element) => {
//         console.log(element);
        
// });




const movies = [
        {
          title: "The Matrix",
          leadActor: "Keanu Reeves",
          year: 1999,
          genre: "Science Fiction",
        },
        {
          title: "Inception",
          leadActor: "Leonardo DiCaprio",
          year: 2010,
          genre: "Science Fiction",
        },
        {
          title: "The Dark Knight",
          leadActor: "Christian Bale",
          year: 2008,
          genre: "Action",
        },
        {
          title: "Titanic",
          leadActor: "Leonardo DiCaprio",
          year: 1997,
          genre: "Romance",
        },
        {
          title: "Pulp Fiction",
          leadActor: "John Travolta",
          year: 1994,
          genre: "Crime",
        },
        {
          title: "Gladiator",
          leadActor: "Russell Crowe",
          year: 2000,
          genre: "Action",
        },
        {
          title: "Forrest Gump",
          leadActor: "Tom Hanks",
          year: 1994,
          genre: "Drama",
        },
        {
          title: "The Lord of the Rings: The Fellowship of the Ring",
          leadActor: "Elijah Wood",
          year: 2001,
          genre: "Fantasy",
        },
        {
          title: "Avatar",
          leadActor: "Sam Worthington",
          year: 2009,
          genre: "Science Fiction",
        },
        {
          title: "Braveheart",
          leadActor: "Mel Gibson",
          year: 1995,
          genre: "Historical",
        }
      ];
      
      movies.forEach(item=>{
        console.log(item.leadActor);
        
      })
      