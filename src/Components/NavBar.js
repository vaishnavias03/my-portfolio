import React from 'react'
import styled from 'styled-components' 
import { Switch, Link, Route } from "react-router-dom"
import { NavHashLink, HashLink } from "react-router-hash-link"
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
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="Skills.js">Skills</a>
            <a class="nav-item nav-link" href="#">Projects</a>
            <a class="nav-item nav-link" href="#">About-me</a>
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