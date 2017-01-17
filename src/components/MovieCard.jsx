import React from 'react'
import { GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

const imdbBase = 'http://www.imdb.com/title/'

// movie is obj: {
//  Poster,
//  Title,
//  Year,
//  Type,
//  imdbID
// }

export const MovieCard = ({ movie }) => (
  <a href={`${ imdbBase }${ movie.imdbID }`} target='blank'>
    <GridTile
      title={ movie.Title }
      subtitle={ movie.Year }
      actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
      >
      <img src={ movie.Poster } />
    </GridTile>
  </a>
)
