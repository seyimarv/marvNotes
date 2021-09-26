import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons//Search';
import { styled, alpha } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { useHistory } from 'react-router';
import './searchBar.scss'


const SearchBar = ({value}) => {
    
    const history = useHistory()
  
    const handleChange = (event) => {
      history.push({
        pathname: '/Search',
        search:  `${event.target.value}`
      })   

    }
   
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 1),
        height: '100%', 
      }));

   
    return (
        <div className='input_container'>
            <SearchIconWrapper>
              <SearchIcon style={{
                   opacity: '0.5'
              }}/>
            </SearchIconWrapper>
            <input id="styled_input"
              placeholder="Search notes by title and content"
              type='text'
              onChange={handleChange}
              value={value}
            />
          </div>
    )        
}


export default SearchBar