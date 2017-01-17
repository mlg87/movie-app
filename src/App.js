import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import fetch from 'isomorphic-fetch'
const apiBase = 'https://www.omdbapi.com/?s='
import { MovieList } from './components/MovieList'
import { SearchBar } from './components/SearchBar'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      movies: []
    }
  }

  updateSearch(e) {
    this.setState({searchTerm: e.target.value})
  }

  fetchMovies(e) {
    // reset the dom
    this.setState({movies: []})
    // get new movies
    fetch(`${apiBase}${this.state.searchTerm}`)
      .then((res) => {
        res.json().then( json => {
          if (json.Search.length) {
            this.setState({movies: json.Search})
          }
        })
      })
  }

  render() {
    const containerStyle = {
      margin: 'auto',
      width: '90%'
    }

    return (
      <MuiThemeProvider >
        <div style={ containerStyle }>
          <h1 style={{textAlign: 'center'}}>Lets look up some fucking movies</h1>
          <SearchBar
            value={ this.state.searchTerm }
            onChange={ this.updateSearch.bind(this) }
            onClick={ this.fetchMovies.bind(this) }
          />
          <MovieList movies={ this.state.movies }/>
        </div>
      </MuiThemeProvider>
    )
  }
}
