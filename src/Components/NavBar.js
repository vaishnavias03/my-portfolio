import React from 'react'
import styled from 'styled-components' 
// import {  Link } from "react-router-dom"
import { HashLink as Link, NavHashLink } from "react-router-hash-link"
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar(){
    return(
      <Header>  
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"> {/*fixed-top so that my animation with aos doesn't look messy */}
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-auto">
                  <Link smooth to="#intro" class="nav-item nav-link">Home </Link>
                  <Link smooth to="#skills" class="nav-item nav-link" >Skills</Link>
                  <Link smooth to="#projects" class="nav-item nav-link" >Projects</Link>
                  <Link smooth to="#About-me" class="nav-item nav-link" href="#">About-me</Link>
              </div>
          </div>
        </nav>
      </Header>
    )
}

const Header= styled.div`
    width: 100%;
`;

export default NavBar