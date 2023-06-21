import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function LoginPage() {

    const navigate = useNavigate();

    async function submitLogin(){
        const username = document.getElementById('loginUsernameId').value;
        const password = document.getElementById('loginPasswordId').value;
        
        if(!username || !password){
            alert('Fields cannot be empty')
            return;
        }

        const user = {
            'username': username,
            'password': password
        }

        const loginUrl = 'https://memoriesbackend-2bak.onrender.com/login';
        const res = await axios.post(loginUrl, user)

        if(res.data.status === 'logged'){
            const token  = res.data.data
            localStorage.setItem('token', token)
            alert('Successfully Logged In')
            navigate('/memories', { replace: true });
        }
        else{
            alert(res.data)
        }

    }


  return (
    <div className='signUpContainer'>
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{"borderRadius": "25px"}}>
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                        <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text" id="loginUsernameId" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1c">@Username</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password" id="loginPasswordId" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                            <label className="form-check-label" htmlFor="form2Example3">
                            Not a Member? <NavLink
                                            aria-current="page"
                                            to="/signup">
                                            Register
                                          </NavLink>
                            </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary btn-md" onClick={submitLogin}>Login</button>
                        </div>

                        </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src='https://res.cloudinary.com/dh4oazlni/image/upload/v1687355575/signupImage_hciyzg.webp'className="img-fluid" alt="Sample"/>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
