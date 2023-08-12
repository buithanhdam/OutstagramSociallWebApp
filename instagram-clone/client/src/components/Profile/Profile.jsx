import React from 'react'
import './Profile.css'
import PI from '../../img/testExplore.jpg'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-header'>
        <div className='profile-header-container'>
          <div className='profile-header-image'>
            <img src={PI} alt="" />
          </div>
          <div className='profile-header-detail'>
            <div className='profile-detail-content'>
                <div className='profile-detail-content-item'>
                  <div className='profile-detail-username'><span>usernanme</span></div>
                  <div><button className='Button Button-s Button-blue'>Edit profile</button></div>
                  <div>setting</div>
                </div>
                <div className='profile-detail-content-item'>
                  <div ><span className='text-font-bold10'>1</span><span> posts</span></div>
                  <div ><span className='text-font-bold10'>1</span><span> followers</span></div>
                  <div ><span className='text-font-bold10'>1</span><span> following</span></div>
                </div>
                <div className='profile-detail-content-item'>
                  <div ><span className='text-font-bold9'>thanh dam</span></div>
                  <div ><span>amm</span></div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>body</div>
      <div>bot</div>
    </div>
  )
}

export default Profile;