import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Buttons } from './Button';
import {ProjectData} from './Data'
import { Head } from './Head';
import Aos from 'aos';
import "aos/dist/aos.css";



const Project = () => {
    useEffect(() =>{
        Aos.init({
            duration:2000,
            delay: 50,
            easing: 'ease-in-out'
        });
    }, [])
    return (
        <div id="projects">
            <Head>My Projects</Head>
                <Contains >
                    {ProjectData.map((item) => {
                        const {id, paragraph, githubSrc, liveVersion} = item
                            return(
                                <Holder data-aos="fade-up">
                                    <img width="250px" height="400px" src="https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                                    <div>
                                        <Child>
                                            <h5> {paragraph}</h5>
                                            <Buttons ><Link to={githubSrc} target="_blank" style={{textDecoration:"none", color: "black"}}>Github</Link></Buttons>
                                            <Buttons  primary ><Link to={liveVersion} style={{textDecoration:"none", color: "black"}}>Preview</Link></Buttons>
                                        </Child>
                                    </div>
                                </Holder>
                                )})}
                </Contains>
        </div>

    );
  
}

const Contains = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    @media (max-width: 1100px){
        grid-template-columns: repeat(1, 1fr);
        height: 1000px;
    }
`;

const Holder = styled.div`
    background-color: #861657;
    background-image: linear-gradient(326deg, #861657 0%, #ffa69e 74%);
    overflow: none;
    width: 250px;
    height: 400px;
    border: 2px olid black;
    background-color: white;
    position: relative; 
    margin: 20px; 
`;

const Child = styled.div`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding: 15px;
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
        width: 25rem;
    }

    && > h5{
        padding: 20px;
        line-height: 30px;
    }
`;

export default Project;

