import React from 'react'
import './Messages.css'
import MessagesLeft from './MessagesLeft/MessagesLeft';
import MessagesRight from './MessagesRight/MessagesRight';
const Messages = () => {
  
  return (
    <div className='messages-maincontainer'>
        <div className='messages-content'>
            <div className='messages-left-side'>
                <MessagesLeft/>
            </div>
            <div className='messages-right-side'>
                <MessagesRight/>
            </div>
        </div>
    </div>
  )
}

export default Messages;