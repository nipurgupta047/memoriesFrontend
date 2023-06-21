import React from 'react'
import { NavLink, redirect } from 'react-router-dom'

export default function HomePage() {
  return (
    <div id='homePageOuterContainer'>
        <div id='topBar'>
            <div id='buttons'>
            <div className='buttonContainer'><button type="button" className="btn btn-lg loginButton" onClick={()=>window.location.href='/login'}>Login</button></div>
            <div className='buttonContainer'><button type="button" className="btn btn-lg signupButton" onClick={()=>window.location.href='/signup'}>Sign Up</button></div>
            <div className='buttonContainer'><button type="button" className="btn btn-lg postsButton" onClick={()=>window.location.href='/posts'}>Posts</button></div>
            </div>
        </div>
        <div>
            <div id='logoContainer'>
                <img src='https://res.cloudinary.com/dh4oazlni/image/upload/v1687355575/logo1_sgwhsh.png' id='logoId' alt='logo'/>
            </div>
        
            <div className='textContainer topTextContainer'>
            <div className='homePageText'>
                <p>
                    Collect your memories at one place
                </p>
            </div>
            </div>
            <div className='textContainer'>
            <div className='homePageText'>
                <p>
                    Mangage your memories efficiently
                </p>
            </div>
            </div>
            <div className='textContainer'>
            <div className='homePageText'>
                <p>
                    Share your memories with other and see others have shared
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}
