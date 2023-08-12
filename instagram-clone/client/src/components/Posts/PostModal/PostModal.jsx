import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Post from '../Post/Post';

import BB from '../../../img/Loi_Ky_Uc_thuyet_minh.jpg'
import './PostModal.css';

const PostModal = ({chatModal,setChatModal}) => {
  
  
  return (
    <>
      <Modal
        show={chatModal}
        onHide={()=>setChatModal(false)}
        size='xl'
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
         <div className='modal-container'>
             <div className='modal-container-main'>
                <div className='modal-container-left-side'>
                    <img src={BB} alt="" />
                </div>
                <div className='modal-container-right-side'>
                    <Post postModel={true} />
                </div>

             </div>
         </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PostModal;