import React from 'react';
import Explore from '../../components/Explore/Explore';
import LeftNav from '../../components/LeftNav/LeftNav';
import './ExplorePage.css';

const ExplorePage = () => {
  return (
    <div className='explorepage-container'>
        <LeftNav />
        <Explore />
    </div>
  )
}

export default ExplorePage;