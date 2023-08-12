import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../Search/SearchBar';
import Create from '../../Create/Create';
import './Navigation.css';

const Navigation = () => {
    const [openSearch,setOpenSearch] = useState(false);
    const handleOpenSearch= ()=>{
        setOpenSearch(pre => !pre);
    }

    const [openCreate,setOpenCreate] = useState(false);
    const handleOpenCreate= ()=>{
        setOpenCreate(pre => !pre);
    }
  return (
    <div className='navigation-container'>
        <div className='navigation-container-group'>
        <Link to={'/home'} style={{color:'var(--primaryText-color)',textDecoration:'none'}}>
            <div className='navigation-container-group_item'>
                <span class="material-symbols-outlined">home</span>
                <span>Home</span>
            </div>
        </Link>
            
            <div className='navigation-container-group_item' onClick={handleOpenSearch}>
                <span class="material-symbols-outlined">search</span>
                <span>Search</span>
            </div>
            {openSearch?<SearchBar />:''}
            <Link to={'/explore'} style={{color:'var(--primaryText-color)',textDecoration:'none'}}>
            <div className='navigation-container-group_item'>
                <span class="material-symbols-outlined">explore</span>
                <span>Explore</span>
            </div>
            </Link>
            
            <Link to={'/messages'} style={{color:'var(--primaryText-color)',textDecoration:'none'}}>
                <div className='navigation-container-group_item'>
                    <span class="material-symbols-outlined">send</span>
                    <span>Messages</span>
                </div>
            </Link>
           
           
            
            <div className='navigation-container-group_item'>
                <span class="material-symbols-outlined">notifications</span>
                <span>Notification</span>
            </div>
            <div className='navigation-container-group_item' onClick={handleOpenCreate}>
                <span class="material-symbols-outlined">add_circle</span>
                <span>Create</span>
            </div>
            {openCreate?<Create openCreate={openCreate} setOpenCreate={setOpenCreate}/>:''}
            <Link to={'/profile'} style={{color:'var(--primaryText-color)',textDecoration:'none'}}>
                <div className='navigation-container-group_item'>
                    <span class="material-symbols-outlined">home</span>
                    <span>My Profile</span>
                </div>
            </Link>
            

        </div>
    </div>
  )
}

export default Navigation;
