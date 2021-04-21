import styled from "styled-components";

export const Buttons = styled.div`
    
    box-sizing: border-box;
    background-color: ${props => props.primary ? "white":"none"};
    background-image: ${props => props.primary ? "none": "linear-gradient(315deg, #045de9 0%, #09c6f9 74%)"};
    border-radius: 50px;
    text-decoration: none;
    outline: none;
    border: 3px solid #09c6f9;
    padding: 9px;
    margin: 4px;
    box-shadow: 10px 9px 12px 0px  rgba(14, 9, 9, 0.37);
    font-family: Times new Roman;
    font-size: 20px;
    transition:  .2s ease-in;
    width: 120px;
    color: black;
    float: left;
  
    &&:hover{
    border: 2px solid plum;
      cursor: pointer;
      text-decoration: none;
  }

   
`;
