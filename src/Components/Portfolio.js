import React, { Component } from 'react'
import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: black;
  background-image: url("https://i.imgur.com/HznhsUp.jpg");
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  height: 100vh;
  opacity: .5;
  a {
    text-decoration: none;
  }
`;



export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <StyledBackground>

           
           
        </StyledBackground> 
      </div>
    )
  }
}
