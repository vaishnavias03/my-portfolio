import React, { Component } from 'react';
import styled from 'styled-components';
import { Buttons } from './Button';
import {ProjectData} from './Data'

// const Container = (props) =>{
//     const {id, paragraph, githubSrc, liveVersion} = props;
//     return(
        
//     )
// }

const Project = () => {
    return (
        <Contains>
            
                {ProjectData.map((item) => {
                    const {id, paragraph, githubSrc, liveVersion} = item
                    return(
                        
                        <Holder>
        
                        <img width="250px" height="400px" src="https://www.pexels.com/photo/gray-and-black-hive-printed-textile-691710"></img>
                        <div>
                            <Child>
                            <h5> {paragraph}</h5>
                            <Buttons href={githubSrc}>Github</Buttons>
                            <Buttons primary href={liveVersion}>Preview</Buttons>
                            
                            </Child>
                        </div>
                       
                    </Holder>
                        
                    )})}
           
        </Contains>

    );
  
}

const Contains = styled.div`
   
 
  width: 100%;
  height: 1300px;
 margin: 4%;
  display: flex;
  justify-content: center;
  display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:10%;
    @media (max-width: 1100px){
    grid-template-columns: repeat(1, 1fr);
    margin: 0;
  




`;

const Holder = styled.div`
background-color: #861657;
background-image: linear-gradient(326deg, #861657 0%, #ffa69e 74%);

    overflow: none;
    margin: 5px;
    width: 250px;
    height: 400px;
    border: 2px olid black;
    background-color: white;
    position: relative;

   
   
   
`;

const Child = styled.div`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    
    padding: 20px;
    box-shadow: 10px 10px 10px 0px grey;
    border: 2px solid black;
    width: 25rem;
    height: 20rem;
    background-color: white;
    position: absolute;
    top: 10%;
    left: 30%;
    @media (max-width: 1100px){
        top: 10%;
        left: 10%;
        width: 23rem;
    }

    
    && > h5{
        padding: 20px;
        line-height: 30px;
    }
`;

export default Project;