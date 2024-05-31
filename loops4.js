// Ex4: Top 1 movie titles

const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];
  
  // Function to calculate the average rating for a movie
  function calculateAverageRating(ratings) {
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return total / ratings.length;
  }
  
  // Find the movie with the highest average rating
  let topMovie = null;
  let highestAverageRating = -1;
  
  movies.forEach(movie => {
    const averageRating = calculateAverageRating(movie.ratings);
    if (averageRating > highestAverageRating) {
      highestAverageRating = averageRating;
      topMovie = movie.title;
    }
  });
  
  console.log("Top 1 movie title:", topMovie);
  
  
  // Expected Output:  The Dark Knight