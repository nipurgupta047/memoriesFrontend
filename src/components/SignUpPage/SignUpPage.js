import React from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUpPage() {

  const navigate = useNavigate()

  async function submitRegister(){

        const name = document.getElementById('registerName').value
        const username = document.getElementById('registerUsername').value
        const email  = document.getElementById('registerEmail').value
        const password = document.getElementById('registerPassword').value
        const retypePassword = document.getElementById('registerRetypePassword').value

        if(!name || !username || !email || !password){
            alert(`Fields shouldn't be empty`)
            return
        }
        if(password !== retypePassword){
            alert('Password and Repeat Password are different')
            console.log(password, retypePassword)
            return
        }

        const userBody = {
            'name' : name,
            'username' : username,
            'email' : email,
            'password' : password
        }

        const addUserUrl = 'https://memoriesbackend-2bak.onrender.com/signup'
        const res = await axios.post(addUserUrl, userBody);
        alert(res.data);
        if(res.data === 'You are registered')
        navigate('/login', { replace: true });
        
        return;
    
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

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text" id="registerName" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1c">Name</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="text" id="registerUsername" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1c">@Username</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="email" id="registerEmail" className="form-control" />
                            <label className="form-label" htmlFor="form3Example3c">Email</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password" id="registerPassword" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password" id="registerRetypePassword" className="form-control" />
                            <label className="form-label" htmlFor="form3Example4cd">Repeat password</label>
                            </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-3">
                            <label className="form-check-label" htmlFor="form2Example3">
                            Already a Member? <NavLink
                                                    aria-current="page"
                                                    to="/login">
                                                    Login
                                                </NavLink>
                            </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary btn-md" onClick={submitRegister}>Register</button>
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
