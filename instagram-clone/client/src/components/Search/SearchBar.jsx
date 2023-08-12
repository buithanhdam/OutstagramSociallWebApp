import React from 'react';
import { useState } from 'react';
import UserItem from '../UserItem/UserItem';
import './SearchBar.css';
import { users } from '../../data';
const SearchBar = () => {
    
    const [onSearch,setOnSearch] = useState(false);
    const handleOnSearch = (e)=>{
            setOnSearch(true)
        if (!e.target.value) {
            setOnSearch(false) 
        }
    }
  return (
    <div className='searchbar-container'>
        <div className='searchbar-container-main'>
            <div className='searchbar-container-main-top'>
                <span>Search</span>
                <div><input type="text" onChange={handleOnSearch} placeholder='Search...' /></div>
            </div>
            <div className='searchbar-container-main-content'>
                <div className='searchbar-container-main-content-group'>
                   
                    {onSearch
                    ?users.map((user,index) => {
                        return (
                          <UserItem user={user}/>
                        )
                      })
                    :<span>recent</span>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar;