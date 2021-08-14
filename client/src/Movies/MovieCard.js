import React, { useState, useEffect,params} from 'react';
import axios from 'axios';
import { useParams,useHistory} from 'react-router-dom';
import MovieInfo from './MovieInfo';
import SavedList from './SavedList';
export default function Movie(props) {
  const [movie, setMovie] = useState();

  const {addToSavedList} =props

  let params = useParams()
// console.log(params);
  const history=useHistory();

  // Change ^^^ this line and use a useParams hook to obtain the :id parameter from the URL, make sure to import useParams from react-router
 
  useEffect(() => {
    let id = Number(params.id)
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a console log
        // and set the response data to the 'movie' state
        // console.log('moveiCard', response);
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = evt => { 
   return {SavedList}
  }
console.log("savemovie",saveMovie);
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { stars } = movie;

  return (
    <div className="save-wrapper">
       <div className="movie-card">
       <MovieInfo movieInfo={movie}/>
 
    <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
      


      <div className="save-button"  >Save</div>
 
      <button type='button' className='goBack-button' onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}

