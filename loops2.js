const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" },
  ]; 
    
  
  for(let i=0;i<=books.length;i++)
    {
        if(books[i].rating>4.7)
            console.log(books[i].title);
     }




// ANOTHER 

for(let book of books){
    if(book.rating>=4.7){
        console.log(book.title);
    }}

    
//ANOTHER 
    let highRatedBooks=[];{  //camel case
    if(book.rating>=4.7) {
     highRatedBooks.pudh(book.title);
        }}