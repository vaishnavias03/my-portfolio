import React, { Component } from 'react';
import styled from 'styled-components';
import { Head } from './Head';

class AboutMe extends Component {
    render() {
        return (
            <div id="AboutMe">
                <Head>About-me</Head>
                <div>
                <Info>
                    <img src="Images/Avatar.jpg" width="26%" height="47%"></img>
                    <p>Hi, I am Vaishnavi.A.S . Currently in my final year of B.sc computer Science in Meenakshi College For Women.<br/>
                        I am interested in Web Application Development and has been self taughting myself new technologies.<br/>
                        My cgpa is 7.7. I scored 96% in my SSLC and 84% in my HSC.<br/>
                    </p>
                </Info>
                <About>
                    <p>Mail Id: vaishnaviarumugam2016@gmail.com</p>
                </About>
                </div>
            </div>
        );
    }
}

const About= styled.div`
    width: 100%;
    background-color: salmon;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 1100px){
        grid-template-columns: repeat(2, 1fr);
    }

    
`;

const Info = styled.p`
    font-size: 120%;
    padding: 20px;
    width: 100%;
    height: 350px;
    opacity: 0.9;
    border: 10px solid pink;

    @media (min-width: 1100px){
        height: 220px;
        
        && > img{
            width: 140px;
            height:140px;
        }
    }

    && > img{
        float: left;
        margin: 20px;
    }
`;

const Container=styled.div`
    background-color: wheat;
    width: 80%;
    height: 50%;
    margin: 10px;
    padding: 10px;
`;

export default AboutMe;