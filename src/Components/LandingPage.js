import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";



const StyledHome = styled.div`
    text-align: center;
    /* background-image: url('https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0dded43cb34de5723402e844260fab81&auto=format&fit=crop&w=1350&q=80'); */
    background-size: cover;
    color: blueviolet;
    -webkit-text-stroke: 1px #112F41;
    padding: 10px 10px;
    height: 80vh;
`

const Styled = styled.body`
    font-family: 'Acme', sans-serif;
`
const StyledH1 = styled.h1`
    text-align: center;
    /* margin-top: 200px; */
    padding-top: 200px;
    font-size: 5vw;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: white;
  color: white;
  padding-bottom: 100px;
`
const StyledLink = styled.div`
  padding-top: 150px;
  color: blueviolet;
  text-align: center;
  background-color: white;
  text-decoration: none;
  border-top: solid 40px blueviolet;
`

const StyledH3 = styled.h1`
  color: #4FB99F;
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: blueviolet;
  height: 40px;
  padding: 1%;
  color: white;
    a {
      text-decoration: none;
      color: white;
    }
`

class Home extends Component {
  render() {
    return (
      <Styled>
      <StyledHome>
        <StyledH1>Reginald Lamar Bramber II</StyledH1>
      </StyledHome>
      <StyledLink>
      {/* <Link to='/login'><img src="https://i.imgur.com/6LpK6nU.png" alt="Click here"/></Link> */}
      </StyledLink>
      <StyledContainer>
      <div>
        <div>
        <StyledH3>
        <a href='https://i.imgur.com/dNR7wcF.jpg' alt='Resumé'>Resumé</a>
        </StyledH3>
        </div>
        </div>
        <div>
        <ul>
        <StyledH3>
        <a href='https://github.com/730photo' alt='github'>Github</a>
        </StyledH3>
        </ul>
        </div>
        <div>
        <ul>
        <StyledH3>
        <a href='https://www.linkedin.com/in/reginald-atl/' alt='linkedin'>Linkedin</a>
        </StyledH3>
        </ul>
        </div>
      </StyledContainer>
      <StyledFooter>
        <a href='https://twitter.com/architekespy' alt='Resumé'>Twitter</a><a href='https://www.instagram.com/architekespy/?hl=en' alt='github'>Instagram</a><a href='https://www.facebook.com/reginald.lamar.18' alt='linkedin'>Facebook</a>
      </StyledFooter>
      </Styled>
    )
  }
}

export default Home;


 
