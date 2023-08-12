import React from 'react';
import './RightNav.css';
import { users } from '../../data';
import UserItem from '../UserItem/UserItem';
const RightNav = () => {
  return (
    <div className='rightnav-container'>
      <div className='rightnav-container-main'>
        <span>Stories</span>
        <div className='rightnav-stories-group'>
            {users.map((user,index) => {
              return (
                <UserItem user={user}/>
              )
            })}
            
        </div>
      </div>
    </div>
  )
}

export default RightNav;