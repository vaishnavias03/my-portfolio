import React, { Component, useEffect } from 'react';
import styled from "styled-components"
import Typed from "react-typed"
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from "react-router-dom"
import {Buttons} from "./Button"


const IntroPage = ()  => {
    useEffect(() =>{
        Aos.init({
            duration:2000,
            delay: 400,
            easing: 'ease-in-out'
        });
    }, [])
        return (
           <Intro id="intro">
               <div>
                    <Text>
                        <Name data-aos="fade-left"><p>Hi, <br/> I am Vaishnavi.A.S</p></Name>
                        <Desc >
                            <div><Typed strings={["Full Stack Developer"]} typeSpeed={70} backDelay={1200} backSpeed={60} loop/></div></Desc>
                    </Text><br/>
                <Buttons>Linkedin</Buttons>
                </div>
           </Intro>
        );
    }



const Intro = styled.div`
    font-size: 290%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 100%;
    height: 900px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: linear-gradient(to right top, #400034, #5b063e, #771345, #93224a, #ae334d, #b7384e, #c13d4e, #ca424e, #c6394e, #c22f4f, #be2550, #b91851);
`;

const Text = styled.div`
`;

const Name = styled.div`
    font-family: 'Times New Roman', Times, serif;
`;

const Desc = styled.div`
    margin-bottom: 3px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 500;
    font-size: 60%;
`;


export default IntroPage;

