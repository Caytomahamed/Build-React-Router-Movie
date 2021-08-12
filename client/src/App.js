import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import { Switch, Route, Link, Router } from "react-router-dom";
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // Study this response with a console log
          // and set the response data to the 'movielist' state
          setMovieList(response.data)
          setSaved(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once

  };

  return (
    <div>
      <SavedList list={[/*saved*/]} />

      <Switch>

       <Route path="/MovieCard/:id">
         <MovieCard   movie={movieList} addToSavedList={addToSavedList}/>
       </Route>

        <Route path='/'>
        <MovieList  movies={movieList}/>
        </Route>
        
       
      </Switch>



    </div>
  );
}


// waxaan ku bartay 
// steps

// 1.ina aad soo dajisato rooter m install --save react-router-domReact-Router

//  2.in adigoo jooga indexedDB.js aad soo jiidato Router
//  import {BrowserRouter as Router} from 'react-router-dom'

// 3.in aad Router add paranet uga dhigto (humiso) app.js 
// <Router>
// <App />
// </Router>

// 4.waxa weeye in aad  soo axios dagsanaya install axios 

// 5.import ku soo samee axios 

// 6.isticmaal axios si aad usoo galiso API-ga 

// axios
// .get('http://localhost:5000/api/movies')
// .then(response => {
//   // Study this response with a console log
//   // and set the response data to the 'movielist' state
//   setMovieList(response.data)
// })
// .catch(error => {
//   console.error('Server Error', error);
// });

// 7.inaad smayso Router soo import ku samayso 
// import { Switch, Route, Link, Router } from "react-router-dom";


// 8.in aad samayso Route adigoo galinaa switch dhexdeeda 
// switch == waxa meeye muhiimad siinta path ay kaa caaminaysaa (ka ugu qeexida dheerleah ayaa frist-ga ah)

// <switch>

// <Route path="/MovieCard/:id">
//   <MovieCard   movie={movieList}/>
// </Route>

//  <Route path='/MovieList'>
//  <MovieList movies={movieList}/>
//  </Route>
// </switch>


// 9.in add Route la isticmaayso link si uu kuu geeyo 

// -haddii aad smaynaysi link cusub 
// <Link to={itsPath} >New link </Link>

// -hadiii uu yahay Element amd Dynamic component ama waxa hore ujirayas 

// {movies.map(movie => (
//   <Link to={`/MovieCard/${movie.id}`}>
//   <div className="movie-card">
//     <h2>{movie.title}</h2>
//     <div className="movie-director">
//       Director: <em>{movie.director}</em>
//     </div>
//     <div className="movie-metascore">
//       Metascore: <strong>{movie.metascore}</strong>
//     </div>
//   </div>
//   </Link>

// <Link to='/MovieList'>
// <div className="home-button">Home</div>
// </Link>


