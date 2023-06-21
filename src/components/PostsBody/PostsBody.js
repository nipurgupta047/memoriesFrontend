import React from 'react'
import Posts from '../Posts/Posts'
import AddNewPost from '../AddNewPost/AddNewPost'
import NavBar from '../NavBar/NavBar'

export default function PostsBody() {
  return (
    <div>
        <NavBar/>
        <div style = {{'display':'flex'}} className = 'my-4 align-items-center justify-content-center'>
            {/* <h1> Posts </h1> */}
        </div>
        <div id='postBodyContainer'>
            <div id='postsDisplayId'>
                <Posts/>
            </div>
            <div id='addNewPostBoxId'>
                <AddNewPost/>
            </div>
        </div>
    </div>
  )
}
