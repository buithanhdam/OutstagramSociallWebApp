import React from 'react';
import PostComment from './PostComment';
import './PostComments.css'

const PostComments = () => {
  return (
    <div className='post-comments-container'>
        <div className='post-comments-group'>
        <PostComment />
        <PostComment />
        <PostComment />
        <PostComment />
        <PostComment />
        <PostComment />
        <PostComment />
        <PostComment />
        </div>
    </div>
  )
}

export default PostComments;