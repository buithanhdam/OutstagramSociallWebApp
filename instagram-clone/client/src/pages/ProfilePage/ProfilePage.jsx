import React from 'react'
import LeftNav from '../../components/LeftNav/LeftNav';
import Profile from '../../components/Profile/Profile';
import './ProfilePage.css'

const ProfilePage = () => {
  return (
    <div className='profilepage-container'>
        <LeftNav />
        <Profile />
    </div>
  )
}

export default ProfilePage;