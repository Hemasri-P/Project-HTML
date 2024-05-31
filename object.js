

 // const movieUrl1 = (domain, genre, year) => {
   // return `http://${domain}?genere=${genre}&year=${year}`;
//}

  //console.log(movieUrl1("imdb.com", "thriller", 2020));


  const cart = [
    { name: "Apple", price: 0.5, quantity: 4 },
    { name: "Banana", price: 0.25, quantity: 6 },
  ];

  const newItems = [
    { name: "Cherry", price: 0.75, quantity: 5 },
    { name: "Date", price: 1, quantity: 3 },
  ];
  const{price,quality}=allItems;
  var total = 0;
  for(let {price,quality} of allItems){
   total+=price*quality;
  
}
   console.log("The cart total is:", total);



