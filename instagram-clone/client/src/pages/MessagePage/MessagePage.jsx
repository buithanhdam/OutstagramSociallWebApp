import React from 'react'
import LeftNav from '../../components/LeftNav/LeftNav';
import Messages from '../../components/Messages/Messages';
import './MessagePage.css'

const MessagePage = () => {
  return (
    
    <div className='messagepage-container'>
        <LeftNav />
        <Messages />
    </div>
    
  )
}

export default MessagePage;