import React, { useEffect } from "react";
import "../../styles.css";
import { NavLink } from "react-router-dom";


function SearchInMemories(memories, setMemories) {

  if(window.location.href !=='/memories'){
   return 
  }

  const searchBar = document.getElementById("searchBar").value;
  if (searchBar === "") return;
  console.log(searchBar)
  let tempmemories = [];
  for (var i = 0; i < memories.length; i++) {
    let memory = memories[i];
    if (memory["place"].toLowerCase().includes(searchBar.toLowerCase())) {
      tempmemories.push(memory);
    }
  }
}

function searchValueChanged(memories, setMemories, originalMemories) {
  
  let MemoriesSearch = document.getElementById("searchBar").value;
  if (MemoriesSearch === "" || MemoriesSearch === null) {
    document.getElementById("noResultFound").textContent = "";
    setMemories(originalMemories);
  } else {
    const searchBar = document.getElementById("searchBar").value;
    let tempmemories = [];

    for (var i = 0; i < originalMemories.length; i++) {
      let memory = originalMemories[i];
      if (memory["place"].toLowerCase().includes(searchBar.toLowerCase())) {
        tempmemories.push(memory);
      }
    }

    if (tempmemories.length !== 0) {
      document.getElementById("noResultFound").textContent = "";
      setMemories(tempmemories);
    } else {
      document.getElementById("noResultFound").textContent =
        "No Result Found as per your search";
      setMemories([]);
    }
  }
}

export default function NavBar({ memories, setMemories, originalMemories }) {

  const logOut = () =>{
  
    localStorage.setItem('token', '')
    alert('Succesfully Logged Out')
    window.location.href='/'
  
  }
  

  return (
    <div id="home_page_upper_body">
      <nav
        className="navbar navbar-dark navbar-expand-lg bg-body-tertiary"
        id="navbar"
      >
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/memories"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/add_new_memory">
                  Add New Memory
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">
                  Posts
                </NavLink>
              </li>
            </ul>

            <NavLink className="navbar-brand" to="/" style={{ margin: "auto" }}>
              Memories
            </NavLink>

            <form className="d-flex" id="searchBarForm" onSubmit={e => { e.preventDefault(); }}>
              <input
                className="form-control me-2"
                placeholder="Search"
                aria-label="Search"
                id="searchBar"
                onChange={() =>
                  searchValueChanged(memories, setMemories, originalMemories)
                }
              />
              <button
                className="btn btn-outline-light"
                type="button"
                onClick={() => SearchInMemories(memories, setMemories)}
              >
                Search
              </button>

            </form>
            <button
                className="btn btn-danger btn-sm"
                id='logoutButton'
                type="button"
                onClick={logOut}
              >
                Log Out
              </button>
          </div>
       
      </nav>
    </div>
  );
}
