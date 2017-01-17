import React from 'react'
import { GridList } from 'material-ui/GridList'
import { MovieCard } from './MovieCard'

const renderMovies = (movies) => {
  console.log('movies', movies);
  return movies.map((movie, i) => {
    return <MovieCard movie={ movie } key={ `${movie.Title}${i}` } />
  })
}

export const MovieList = ({ movies }) => {
  return (
    <GridList cols={ 4 } >
      { renderMovies(movies) }
    </GridList>
  )
}
