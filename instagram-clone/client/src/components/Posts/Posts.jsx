import React from 'react';
import Post from './Post/Post';

import './Posts.css'
const Posts = () => {
  return (
    <div className='posts-container'>
        <div className='posts-container-group'>
           <Post postModel={false}/>
           <Post postModel={false}/>
        </div>
        
    </div>
  )
}

export default Posts;