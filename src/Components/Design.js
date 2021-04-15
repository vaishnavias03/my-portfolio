import React, { Component } from 'react';
import styled from 'styled-components'


class Home extends Component {
    render() {
        return (
            <div>
               <ContainerParent>
                   <ContainerChild >
                       <Text>
                            <div className="justify-content-md-center">
                                Hi, I am Vaishnavi.A.S
                            </div>
                       </Text>
                   </ContainerChild>
               </ContainerParent>
            </div>
        );
    }
}


const ContainerParent = styled.div`
    background-color: #1fd1f9;
background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);

    width: 100%;
    height: 900px;
    
`;

const ContainerChild = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    left: 50%;
    background-color: #6b0f1a;
    background-image: linear-gradient(315deg, #6b0f1a 0%, #b91372 74%);
    border-radius: 100% 0px  0 100% ;
`;

const Text = styled.div`
    width: 120%;
    border: 2px solid white;
    background-color: #861657;
background-image: linear-gradient(326deg, #861657 0%, #ffa69e 74%);

    height: 60%;
    color: black;
    
    text-align: center;
    position: absolute;
    left: -60%;
    top: 20%;
    font-size: 140%;
`;


export default Home;