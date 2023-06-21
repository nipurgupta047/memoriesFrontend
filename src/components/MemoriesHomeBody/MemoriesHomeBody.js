import React, { useEffect, useState } from 'react'
import MemoryCard from '../MemoryCard/MemoryCard.js'
import axios from 'axios'
import NavBar from '../NavBar/NavBar.js'




export default function MemoriesHomeBody({memories, setMemories, originalMemories, setOriginalMemories}) {

  const [editMemoryObjectId, setEditMemoryObjectId] = useState('')

  useEffect(() =>{

    const getMemories = async() =>{
      const PersonalMemoriesUrl = 'https://memoriesbackend-2bak.onrender.com/memories';
      // console.log(PersonalMemoriesUrl)
 
      try {
        const res = await axios.post(PersonalMemoriesUrl, {'token':localStorage.getItem('token')});
        if(res.data === 'You are not logged in'){
          alert('Please Login');
          return;
        }
        setOriginalMemories(res['data']['memoriesArray']);
        setMemories(res['data']['memoriesArray']);

        if(res['data']['memoriesArray'] === null || res['data']['memoriesArray'].length === 0){
          setMemories([]);
          setOriginalMemories([])
        }
      } catch (error) {
        console.error('NOPE',error);
      }
    }
    getMemories();
    
  }, [])

  const editMemory = async() => {
    if(editMemoryObjectId === '')
    cancelEdit();

    const newMemory = {
      'file': document.getElementById('newMemoryImageUrl').value,
      'place':document.getElementById('newMemoryPlace').value,
      'desc':document.getElementById('newMemoryDesc').value,
      'date':document.getElementById('newMemoryDate').value,
      'token': localStorage.getItem('token'),
    }
    if(newMemory.place === '' || newMemory.desc === '' || newMemory.date === '' || newMemory.file === ''){
      alert('Fields are empty');
      return;
    }
  
      const file = document.getElementById('newMemoryImageUrl').files[0]
      const data = new FormData();
      data.append('token', newMemory.token)
      data.append('file', file)
      data.append('desc',newMemory.desc)
      data.append('place', newMemory.place)
      data.append('date', newMemory.date)
      data.append('objectId',editMemoryObjectId)

  try {
      const addNewMemoryUrl = 'https://memoriesbackend-2bak.onrender.com/editMemory';
      document.getElementById('editBarMemory').style.visibility = 'visible'
      document.getElementById('change_memory_container').style.visibility = 'hidden'
      const response = await axios.post(addNewMemoryUrl, data);
      document.getElementById('editBarMemory').style.visibility = 'hidden'
      document.getElementById('change_memory_container').style.visibility = 'hidden'
      document.getElementById('newMemoryPlace').value = '';
      document.getElementById('newMemoryDesc').value = '';
      document.getElementById('newMemoryDate').value = '';
      document.getElementById('newMemoryImageUrl').value = '';
      alert(response.data);
      window.location.reload('false')
  } 
  catch (error) {
      document.getElementById('editBarMemory').style.visibility = 'hidden'
      document.getElementById('change_memory_container').style.visibility = 'hidden'
      alert('could not connect and add to database ');
  }
  cancelEdit()
  }

  const cancelEdit = () =>{
    document.getElementById('editBarMemory').style.visibility = 'hidden'
    document.getElementById('change_memory_container').style.visibility = 'hidden'
    setEditMemoryObjectId('');
  }


  return (
    <div>

        <NavBar memories={memories} setMemories={setMemories} originalMemories = {originalMemories}/>

        <div id='change_memory_container' className='my-4'>
            <div id='editBarMemory'>Updating Please wait...</div>
            <div style = {{'display':'flex'}} className = 'my-2 align-items-center justify-content-center'>
                <h3> Change Your Memory </h3>
            </div>
            
            <form>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title </label>
                    <input type="text" className="form-control" id="newMemoryPlace" name='place'/>
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="newMemoryDesc" rows="3" name='desc'></textarea>
                </div>
                <div className="mb-2">
                    <label htmlFor="formFile" className="form-label">Title Image</label>
                    <input className="form-control" type="file" id="newMemoryImageUrl" accept='image/*' name='image'/>
                </div>
                <div className="mb-2">
                    <label htmlFor='formDate' className='form-label'>Date</label>
                    <input className="form-control" type='date' id = 'newMemoryDate'/>
                </div>
                <button type="button" className="btn btn-primary my-2" onClick={editMemory}>Update</button>
                <button type="button" className="btn btn-secondary my-2" onClick={cancelEdit} style={{ 'float':'right'}}>Cancel</button>
                
            </form>

        </div>



        <div style = {{'display':'flex'}} className = 'my-5 align-items-center justify-content-center'>
            <h1> Memories </h1>
        </div>
        
        <div id = 'noResultFoundDiv' className='text-center'>
          <p id='noResultFound'></p>
        </div>

        <div className = 'container my-3' style={{'width':'70%'}} > 
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {memories.map((element) => (
                <div key={element._id}>
                    <MemoryCard setEditMemoryObjectId = {setEditMemoryObjectId} 
                              objectId={element._id} 
                              imageUrl={element.imageUrl} 
                              place ={element.place} 
                              desc={element.desc} 
                              date={element.date}/>
                </div>
                ))}
            </div>
        </div>

    </div>
  )
}
