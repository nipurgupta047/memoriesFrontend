import '../../styles.css'
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import { useEffect } from 'react';


export default function AddNewMemory({memories, setMemories, originalMemories}) {

    useEffect(() => {
        document.getElementById('searchBarForm').style.visibility = 'hidden'
    },[])

    const AddIntoMemory =  async (memories, originalMemories, setOriginalMemories) =>{

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

        try {
            const addNewMemoryUrl = 'https://memoriesbackend-2bak.onrender.com/add_new_memory';
            document.getElementById('uploadBarMemory').style.visibility = 'visible'
            document.getElementById('add_new_memory_container').style.visibility = 'hidden'
            const response = await axios.post(addNewMemoryUrl, data);
            document.getElementById('uploadBarMemory').style.visibility = 'hidden'
            document.getElementById('add_new_memory_container').style.visibility = 'visible'
            document.getElementById('newMemoryPlace').value = '';
            document.getElementById('newMemoryDesc').value = '';
            document.getElementById('newMemoryDate').value = '';
            document.getElementById('newMemoryImageUrl').value = '';
            alert(response.data);
        } 
        catch (error) {
            document.getElementById('uploadBarMemory').style.visibility = 'hidden'
            document.getElementById('add_new_memory_container').style.visibility = 'visible'
            alert('could not connect and add to database ');
        }
     
    };


  return (
    <div>
    <NavBar memories={memories} setMemories={setMemories} originalMemories = {originalMemories}/> 
    <div id='uploadBarMemory'>Uploading Please wait...</div>
    <div id='add_new_memory_container'>
        
        <div style = {{'display':'flex'}} className = 'my-4 align-items-center justify-content-center'>
            <h1> Add New Memory </h1>
        </div>
        
        <form>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title </label>
                <input type="text" className="form-control" maxLength='30' id="newMemoryPlace" name='place'/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" maxLength = '200'id="newMemoryDesc" rows="3" name='desc'></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Title Image</label>
                <input className="form-control" type="file" id="newMemoryImageUrl" accept='image/*' name='image'/>
            </div>
            <div className="mb-3">
                <label htmlFor='formDate' className='form-label'>Date</label>
                <input className="form-control" type='date' id = 'newMemoryDate'/>
            </div>

            <button type="button" className="btn btn-primary my-2" onClick={ ()=>AddIntoMemory(memories, originalMemories)}>Add</button>
        </form>

    </div>

    </div>
  )
}
