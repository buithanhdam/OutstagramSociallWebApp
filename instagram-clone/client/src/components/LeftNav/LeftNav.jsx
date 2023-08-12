import React from 'react';
import './LeftNav.css';
import Navigation from './Navigation/Navigation';
import { Link } from 'react-router-dom';
const LeftNav = () => {
  return (
    <div className='leftnav-container'>
        <div className='leftnav-container-main'>
          <Link to={'/home'} style={{color:'black',textDecoration:'none'}}>
            <div className='leftnav-container-main_logo'>
                <span>Outstagram</span>
            </div>
            </Link>
            <Navigation />
            <div className='navigation-container-group_item'>
                <span class="material-symbols-outlined">menu</span>
                <span>More</span>
            </div>

        </div>
    </div>
  )
}

export default LeftNav;
