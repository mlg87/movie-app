import React from 'react'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import TextField from 'material-ui/TextField'
import Search from 'material-ui/svg-icons/action/search'
import RaisedButton from 'material-ui/RaisedButton'

export const SearchBar = ({ onChange, value, onClick }) => {
  const searchBarStyle = {
    backgroundColor: 'white',
    width: '100%',
    borderBottom: '1px solid gray'
  }

  const searchInputStyle = {
    marginLeft: '10px',
    width: '100%'
  }

  return (
    <Toolbar style={ searchBarStyle }>
      <ToolbarGroup style={ {width: '100%'} }>
        <Search />
        <TextField
          hintText='Search'
          style={ searchInputStyle }
          underlineShow={ false }
          onChange={ onChange }
          value={ value }
        />
        <RaisedButton
          label={'Search'}
          style={{width: '200px'}}
          onClick={ onClick }
        />
      </ToolbarGroup>
    </Toolbar>
  )
}
