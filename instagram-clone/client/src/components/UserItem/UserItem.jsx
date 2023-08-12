import React from 'react';
import './UserItem.css';
const UserItem = ({user}) => {
  return (
    <div className='user-card_item'>
                  <div className='user-card_item_img'><img src={user.image} alt="" /></div>
                  <div className='user-card_item_body'>
                      <span>{user.username}</span>
                      <span>{user.name}</span>
                  </div>
      </div>
  )
}

export default UserItem;