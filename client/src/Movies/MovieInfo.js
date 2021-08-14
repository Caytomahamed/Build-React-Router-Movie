import React from 'react';

function MovieInfo(props){
    const { movieInfo } = props

    return(
        <div>
   
                <h2>{movieInfo.title}</h2>
                <div className="movie-director">
                    Director: <em>{movieInfo.director}</em>
                </div>
                <div className="movie-metascore">
                    Metascore: <strong>{movieInfo.metascore}</strong>
          </div>
        </div>

    )
}

export default MovieInfo;