

  const movieUrl1 = (domain, genre, year) => {
    return `http://${domain}?genere=${genre}&year=${year}`;
  }

  console.log(movieUrl1("imdb.com", "thriller", 2020));