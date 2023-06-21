import React from 'react'
import axios from 'axios'

export default function AddNewPost() {

    const addNewPost = async () =>{    

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
            var addNewMemoryUrl = 'https://memoriesbackend-2bak.onrender.com/add_new_post';
            document.getElementById('uploadBarPost').style.visibility = 'visible'
            document.getElementById('add_new_post_container').style.visibility = 'hidden'
            const response = await axios.post(addNewMemoryUrl,data);
            document.getElementById('uploadBarPost').style.visibility = 'hidden'
            document.getElementById('add_new_post_container').style.visibility = 'visible'
            document.getElementById('newMemoryPlace').value = '';
            document.getElementById('newMemoryDesc').value = '';
            document.getElementById('newMemoryDate').value = '';
            document.getElementById('newMemoryImageUrl').value = '';
            alert(response.data);
            if(response.data === 'Please Login To Post Something')
            return
            window.location.reload('false')
        } 
        catch (error) {
            document.getElementById('uploadBarPost').style.visibility = 'hidden'
            document.getElementById('add_new_post_container').style.visibility = 'visible'
            alert('Could not connect and add to database ');
        }    
        
    }
    



  return (
    <div>
        <div id='add_new_post_container' className='my-4'>
        <div id='uploadBarPost'>Uploading Please wait...</div>
            <div style = {{'display':'flex'}} className = 'my-2 align-items-center justify-content-center'>
                <h3> Add New Post </h3>
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

                <button type="button" className="btn btn-primary my-2" onClick={addNewPost}>Add</button>
            </form>

        </div>

    </div>
  )
}
