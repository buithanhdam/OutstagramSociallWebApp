import React from 'react';
import './PostSquare.css';
import testExplore from '../../img/testExplore.jpg' ;
import { useState } from 'react';
import PostModal from '../Posts/PostModal/PostModal';
const PostSquare = () => {
    const [chatModal,setChatModal] = useState(false);
    const handleOpenPostModal = () => {
        setChatModal(true);
    }
    
  return (
        
      <div className='explore-post-item' >
                <div className='explore-post-item-content'>
                    <div className='explore-post-item-content-overlay'  onClick={chatModal?null:handleOpenPostModal}>
                {chatModal?<PostModal chatModal={chatModal} setChatModal ={setChatModal} />:''}
                        <img className='explore-post-item-content-img' src={testExplore} alt="" />
                        <div className='explore-post-item-content-icon'>
                           <div>
                           <span class="material-symbols-outlined">favorite</span>
                            <span>100</span>
                            </div>
                            <div>
                            <span class="material-symbols-outlined">chat_bubble</span>
                            <span>12</span>

                            </div>
                        </div>
                        
                    </div>
                </div>
    </div>
  )
}

export default PostSquare;