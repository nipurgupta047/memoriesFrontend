import React from 'react'
import '../../styles.css'
import axios from 'axios';
import MemoriesHomeBody from '../MemoriesHomeBody/MemoriesHomeBody';

export default function MemoryCard({setEditMemoryObjectId, objectId, imageUrl, desc, date, place}) {

  const deleteMemory = async() =>{
   
    const flag = window.confirm('Press OK to delete memory');
    if(flag === false){
      return
    }
    const memory = {
      'token': localStorage.getItem('token'),
      'objectId': objectId
    }
    const URL = 'https://memoriesbackend-2bak.onrender.com/deleteMemory'
    const res = await axios.post(URL, memory);
    alert(res.data);
    if(res.data === 'Memory Deleted Succesfully'){
      window.location.reload('false')
    }

  }

  const editMemory = async(objectId)=>{
    document.getElementById('change_memory_container').style.visibility = 'visible'
    setEditMemoryObjectId(objectId)
  }


  return (
    <div className="col">     
        <div className="card h-100 " id='memory_card_body'>
            <img src={imageUrl} className="card-img-top" id="memory_card_image" alt="..." />
                <div className="card-body">
                    <h6 className="card-title"><b> {place.slice(0,30)} {place.length>30?'..':''} </b></h6>
                    <p className="card-text " > {desc.slice(0,100)} {desc.length>100?'...':''} </p>
                    
                </div>
                <div className="card-footer" id='memory_card_date'>
                    <small className="text-body-secondary">{date}</small>
                    <img className='icon' src='https://res.cloudinary.com/dh4oazlni/image/upload/v1687390662/delete_vmakrz.svg'alt='delete' onClick={deleteMemory} style={{'height':'18px', 'width':'18px','float':'right', 'marginRight':'5px'}}></img> 
                    <img className='icon' src='https://res.cloudinary.com/dh4oazlni/image/upload/v1687390662/edit_biwkru.svg' alt='edit' onClick={()=>editMemory(objectId)} style={{'height':'18px', 'width':'18px', 'float':'right','marginRight':'10px'}}></img>  
                </div>
        </div>
    </div>
  )
}
