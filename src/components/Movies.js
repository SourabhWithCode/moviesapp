import React from 'react'
import { NavLink } from 'react-router-dom';
import {useGlobalContext } from '../context/context'


const Movies = () => {
  
  const {movie} = useGlobalContext();
  
  

  return (
    <>
    <section className='movie-page'>
      <div className="grid grid-4-col">
      {movie.map((curMovies)=>{
        const {Title,imdbID,Poster} = curMovies;
        const shortTitle = Title.substring(0,15);
        return(
          <NavLink key={imdbID} to={`movie/${imdbID}`}>
            <div className="card">
              <div className="card-info">
                <h2>{shortTitle.length >= 15 ? `${shortTitle}...` : shortTitle} </h2>
                <img src={Poster} alt="Poster Image" />
              </div>
            </div>
          </NavLink>
        )
      })}
       </div>
    </section>
    </>
  )
}

export default Movies
