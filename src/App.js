import { useState} from 'react'
import NavBar from './components/NavBar/NavBar.js'
import MemoriesHomeBody from './components/MemoriesHomeBody/MemoriesHomeBody.js'
import AddNewMemory from './components/AddNewMemory/AddNewMemory.js';
import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage.js';
import SignUpPage from './components/SignUpPage/SignUpPage.js';
import PostsBody from './components/PostsBody/PostsBody.js';
import HomePage from './components/HomePage/HomePage.js';

function App() {
  const [originalMemories, setOriginalMemories] = useState([]);
  const [memories,setMemories] = useState([]);
  
  return (    
    <> 
      {/* <Try/> */}
      
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/signup" element={<SignUpPage/>}/>
        <Route exact path="/memories" element={<MemoriesHomeBody memories = {memories} setMemories={setMemories} originalMemories = {originalMemories} setOriginalMemories = {setOriginalMemories}/>}/>
        <Route exact path="/add_new_memory" element={<AddNewMemory memories = {memories} setMemories = {setMemories} originalMemories = {originalMemories} setOriginalMemories = {setOriginalMemories}/>} />
        <Route exact path="/posts" element={<PostsBody/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
} 

export default App;
