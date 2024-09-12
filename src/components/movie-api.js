import axios from "axios"; 

export {
  TrendingMovies,
//   Movies,
//   MovieDetails,
//   Reviews,
//   Cast,
};

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzA0MThiZGRmNjQ5MTkwOGFlOGQ3NjAyNWIxYTBlZiIsIm5iZiI6MTcyNjE0MjAwNi41MDM3MjIsInN1YiI6IjY2ZTJkNDcyOTAxM2ZlODcyMjIzODk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZgrQvgD8KGR-_-5-dve2rLS6UB8f7ZfNQtCHTien4A'
    }
  };


  const TrendingMovies = async () => {
    const { data } = await axios(
      "https://api.themoviedb.org/3/trending/movie/day? ",
      options
    );
    return data.results;
  };