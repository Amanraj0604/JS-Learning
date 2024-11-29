const coding=['js','java','c','cpp','python'];

const value=coding.forEach((element) => {
    // console.log(element); 
    return element;
});

// console.log(value); it return Undefine becouse we can't return value using foreach

//filter

const numArr=[1,2,3,4,5,6,7,8,9,10];

// const numValue=numArr.filter((num)=>num>5);
// console.log(numValue);

//supose we want to use foreach loop for same work so we have to go through some conditional programm

// const newNum=[];

// numArr.forEach((num)=>{
//     if(num>6)
//     {
//         newNum.push(num);
//     }
// })
// console.log("num value");

// console.log(newNum);


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
  
  const result=movies.filter((result)=>result.genre==="Historical" && result.year>1900);
  console.log(result);
   