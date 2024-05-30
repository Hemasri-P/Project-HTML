const cart = [
    { name: "Apple", price: 0.5, quantity: 4 },
    { name: "Banana", price: 0.25, quantity: 6 },
  ];
  
  const newItems = [
    { name: "Cherry", price: 0.75, quantity: 5 },
    { name: "Date", price: 1, quantity: 3 },
  ];
  
  //   Ex 1.1: Combine cart + newItems
  
  const allitems=[...cart,...newItems]
  console.log(items);

  //  find total of cart
   let total=0;
   for(let item of allitems){
    total+=item.price*item.quality;
   }
   console.log("The cart total is:", total);

   
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
    