import React from 'react';
import { Link } from 'react-router-dom';
import MovieInfo from './MovieInfo';
export default function MovieList(props) {
  // This component is expecting props from App.js, name your prop "movies"
  const { movies } = props

  return (
    <div className="movie-list">
      {/*  Use Link from React Router Dom to make each movie clickable */}
      {movies.map(movie => (
        <Link to={`/MovieCard/${movie.id}`}>
         <div className="movie-card">
           <MovieInfo movieInfo ={movie}/>
          </div>
        </Link>

      ))}


    </div>
  );
}

