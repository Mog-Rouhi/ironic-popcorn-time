import { useState } from "react";
import moviesArray from "../data/movies.json";

function Main() {
  const [listOfMovies, setListOfMovies] = useState(moviesArray);

  const deleteMovie = (movieId) => {
    console.log("deleting movie", movieId);

    //const newList = listOfMovies.splice(movie.id, 1);
    const newList = listOfMovies.filter((movie) => {
      //   if (movie.id === movieId) {
      //     return false;
      //   } else {
      //     return true;
      //   }

      return movie.id !== movieId;
    });
    setListOfMovies(newList);
  };

  return (
    <section className="Main">
      {listOfMovies.length ? (
        <>
          {listOfMovies.map((movie) => {
            return (
              <div className="movie" key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <p>Rating: {movie.rating}</p>
                {movie.rating >= 8 && <p>RECOMMENDED</p>}
                <img src={movie.imgURL} alt="movie" />
                <br />
                <button
                  onClick={() => {
                    deleteMovie(movie.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <p>Sorry, no movies to display!</p>
        </>
      )}
    </section>
  );
}

export default Main;
