import React from 'react'

export default function EditMemory() {

    const editMemory = () =>{
        console.log('done');
    }

  return (
    <div>

        <div id='editMemoryPopUpForm'>
          <div style = {{'display':'flex'}} className = 'my-2 align-items-center justify-content-center'>
              <h3> Edit Your Memory </h3>
          </div>
          <form>
              <div className="mb-2">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Title </label>
                  <input type="text" className="form-control" id="editMemoryPlace" name='place'/>
              </div>
              <div className="mb-2">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                  <textarea className="form-control" id="editMemoryDesc" rows="3" name='desc'></textarea>
              </div>
              <div className="mb-2">
                  <label htmlFor="formFile" className="form-label">Image</label>
                  <input className="form-control" type="file" id="editMemoryImageUrl" accept='image/*' name='image'/>
              </div>
              <div className="mb-2">
                  <label htmlFor='formDate' className='form-label'>Date</label>
                  <input className="form-control" type='date' id = 'editMemoryDate'/>
              </div>

              <button type="button" className="btn btn-primary my-2" onClick={editMemory}>Update</button>
          </form>
        </div>
      
    </div>
  )
}
