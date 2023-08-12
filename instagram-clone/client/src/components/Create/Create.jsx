import React, { useRef,useState } from 'react';
import './Create.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import BB from '../../img/testExplore.jpg'
const Create = ({openCreate,setOpenCreate}) => {
    const [uploadContent, setUploadContent] = useState(null);
    const uploadRef = useRef();
    const handleClickUpload = () =>{
        uploadRef.current.click();
    }
    const handleClickDiscard = () =>{
        URL.revokeObjectURL(uploadContent);
        setUploadContent(null)
    }
    const onFileUploadChange = (e) =>{
        if(e.target.files && e.target.files[0]){
            
            const imageUrl = URL.createObjectURL(e.target.files[0])
         
            setUploadContent(imageUrl)
        }else{
            setUploadContent(null)
        }
    }

  return (
    <>
    <Modal
      show={openCreate}
      onHide={()=>setOpenCreate(false)}
      size='l'
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
          
        <Modal.Title id="example-custom-modal-styling-title">
          <h6>Create a new post</h6>
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
       <div className='create-post-body'>
           <div className='create-post-content'>        
              {
              uploadContent!==null?
                <div className='create-post-upload-content'>
                    <div className='image-overlay'>
                        <img src={uploadContent} alt="" />
                    </div> 
                     <div className='post-content-description'>
                        <div className='post-caption'>
                            <input type="text" placeholder='Write a caption' />
                        </div>
                        <div className='post-option'>
                            <button className='Button Button-s Button-red' onClick={handleClickDiscard}>Discard</button>
                            <button className='Button Button-s'>Upload</button>
                        </div>
                    
                    </div> 
               </div>
                : <div className='create-post-upload'>
                    <span class="material-symbols-outlined upload-image-icon">image</span>
                    <button onClick={handleClickUpload} className='Button Button-m'>Upload from computer</button>
                    <input type="file" style={{display:'none'}} accept="image/*" onChange={onFileUploadChange} ref={uploadRef}/>
                </div>
            }
                
           </div>      
       </div>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default Create;