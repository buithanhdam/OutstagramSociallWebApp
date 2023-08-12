import React from 'react';
import Img from '../../../img/Loi_Ky_Uc_thuyet_minh.jpg'
const PostComment = () => {
  return (
    <div className="post-comment-item">
         <div className='post-comment-item-left'>
             <div className="post-comment-item-left-img">
                <img src={Img} alt="" />
             </div>
             <div className='post-comment-item-left-content'>
                <div className='post-comment-item-left-content-top'>
                    <span>Username</span>
                    <div><p>this movie is so good and i love it too</p></div>
                </div>
                <div className='post-comment-item-left-content-bot'>
                    <span>21/11/2022</span>
                    <span>123 likes</span>
                </div>
             </div>
        </div>    
        <div className='post-comment-item-right'>
           <span class="material-symbols-outlined">favorite</span>
        </div>   
    </div>
  )
}

export default PostComment;