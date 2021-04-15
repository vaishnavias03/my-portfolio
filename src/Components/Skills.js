import React, { Component, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import styled from "styled-components"

import {SkillsData} from "./Data"

const Progress = (props) =>{
    return(
      <div>
          <ProgressBar >
              <Parent width={props.progress}>
                    {props.progress}
                </Parent>
          </ProgressBar>
      </div>
    )
}

function Skills(props)
{
    useEffect(() =>{
        Aos.init({
            duration:2000,
            delay: 400,
            easing: 'ease-in-out'
        });
    }, [])
        return (
           <Holder>
                <div data-aos="fade-up"><img src="Images/vector1.jpg" width="350px" height="500px" ></img></div>
            <Skill>
               
                {SkillsData.map((item) => {
                    const {id, value, src, progress} = item;
                    return(
                        <span key={id} >
                            <Contains data-aos="fade-up">
                                <div> <img src={src} width="50px" height="50px"></img></div>
                                <h5>{value}</h5>
                                <Progress progress={progress} ></Progress>
                            </Contains>                
                        </span>
                           )})}
                           
                </Skill>
               
                </Holder>
            );
    
}

const Skill = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 25px;
    grid-gap: 20px;
   
    height: 100px;
    width: 100%;
    
    @media (min-width: 1100px){
        grid-template-columns: repeat(3, 1fr);
       padding: 3px;
    }
    && > span{
    width: 100%;
    height: 200px;
   }
  
`;

const Contains= styled.div`
    overflow: hidden;
    padding: 13px;
    margin-left: 10%;
    width: 150px;
    height: 200px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 9px 9px 20px 0px  rgba(14, 9, 9, 0.37);
   && > div, h5{
    margin: 12px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
   }
  
    

`;

const ProgressBar= styled.div`
font-size: 7px;
padding: 0px;
 width: 130px;
 height: 9px;
 background-color: #9c9fa2;
 border-radius: 40px;
 
`;

const Parent= styled.div`
    padding-left: 5%;
    width: ${(props) => props.width};
    height: 9px;
     background-color: #f5d809d1;
     border-radius: 20px;
   
    
`;

const Holder = styled.div`
   
    height: 1400px;
     width: 100%;
    
  
    @media (min-width: 1100px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 800px;
        margin-top: 10%;
    }

    && > div{
        padding: 5px;
       
    }
   
 
 
`;

export default Skills;

 


  
  