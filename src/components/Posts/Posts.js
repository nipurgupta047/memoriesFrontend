import React, { useEffect, useState} from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import PostCard from '../PostCard/PostCard'

export default function Posts() {

  var [posts, setPosts] = useState([])

  useEffect(() => {
    document.getElementById('searchBarForm').style.visibility = 'hidden'
    const getPosts = async() =>{
      const postsUrl = 'https://memoriesbackend-2bak.onrender.com/posts';
      try{
        const res = await axios.get(postsUrl);
        if(res.data === 'Could not fetch posts'){
          alert(res.data);
          return;
        }
        setPosts(res.data)
      }catch (error) {
        console.log(error)
        
      }
    }

    getPosts();
  }, []) 

  console.log('op',posts)

  return (
    <div>
      
      <div className = 'container my-3' id='postsDisplayInnerBoxId'> 
          <div className="row row-cols-1 row-cols-md-2 g-4">
          {posts.toReversed().map((element) => (
            <div key={element._id}>
                <PostCard 
                  imageUrl={element.imageUrl}
                  place = {element.place}
                  desc = {element.desc}
                  date = {element.date}
                  user = {element.user}
                  uploadDate = {element.uploadDate}
                />
            </div>
          ))}
          </div>
      </div>

    </div>
  )
}
