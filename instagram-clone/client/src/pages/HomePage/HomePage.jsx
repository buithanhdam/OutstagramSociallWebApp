import React from 'react';
import LeftNav from '../../components/LeftNav/LeftNav';
import Posts from '../../components/Posts/Posts';
import RightNav from '../../components/RightNav/RightNav';
import './HomePage.css';
const HomePage = () => {

  return (
    <div className='homepage-container'>
        <LeftNav />
        <Posts />
        <RightNav />
    </div>
  )
}

export default HomePage;