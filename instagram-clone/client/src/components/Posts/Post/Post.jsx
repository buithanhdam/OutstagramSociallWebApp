import React from 'react';
import { useState } from 'react';
import PostComments from '../PostComments/PostComments';
import PostModal from '../PostModal/PostModal';
import BB from '../../../img/Loi_Ky_Uc_thuyet_minh.jpg'
import './Post.css'
const Post = ({postModel}) => {
    const [chatModal,setChatModal] = useState(false);
    const handleOpenChatModal = ()=>{
        setChatModal(true)
    }
  return (
    <div className='posts-container-group_item'>
        {chatModal?<PostModal chatModal={chatModal} setChatModal ={setChatModal}/>:''}
        <div className='posts-container-group_item_header'>
            <div>
                <div className='posts-container-group_item_header_img'><img src={BB} alt="" />
                </div>
                <span>username</span>
            </div>
            <div className='posts-container-group_item_header_option'>
                <span class="material-symbols-outlined">more_horiz</span>
            </div>
        </div>
        <div className='posts-container-group_item_body'>
          {postModel?<PostComments />:<img src={BB} alt="" />
}  
        </div>
        <div className='posts-container-group_item_footer'>
            <div className='posts-container-group_item_footer_action'>
                <div className='posts-container-group_item_footer_action_three'>
                    <span class="material-symbols-outlined">favorite</span>
                    <span class="material-symbols-outlined" onClick={postModel?'':handleOpenChatModal}>chat_bubble</span>
                    <span class="material-symbols-outlined">send</span>
                </div>
                <div  className='posts-container-group_item_footer_action_save'>
                    <span class="material-symbols-outlined">bookmark</span>
                </div>
            </div>
            <div className='posts-container-group_item_footer_likes'><span>1000 likes</span></div>
            <div className='posts-container-group_item_footer_title'>
                <span>username</span>
                <p>hello it is my favorite movies in 2021</p>
            </div>
            {postModel?'':
                <div className='posts-container-group_item_footer_more'>
                    <span onClick={handleOpenChatModal}>View all 121 comments</span>
                </div>
            } 
            
            <div className='posts-container-group_item_footer_date'>
                <span>13/11/2022</span>
            </div>
        </div>
        <div className='posts-container-group_item_comment'>
            <div><span class="material-symbols-outlined">mood</span></div>
            <div><input type="text" placeholder='Add a comment...' /></div>
            <div><span>Post</span></div>
        </div>
    </div>
  )
}

export default Post;