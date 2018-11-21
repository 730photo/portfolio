import React, { Component } from 'react'
import styled from "styled-components";
import { Card, Grid, Image } from 'semantic-ui-react';

const StyledBackground = styled.div`
  background-color: black;
  background-image: url("https://i.imgur.com/HznhsUp.jpg");
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  height: 50.5vw;
  opacity: .3;
  a {
    text-decoration: none;
  }
`;

// const StyledProjectList = styled.div`
//   padding-top:100px;
//   padding-bottom:50px;
//   display:flex;
//   justify-content: space-evenly;
// `

const StyledGrid = styled(Grid)`
 &&&{ 
   padding-top: 10px;
   padding-bottom: 10px;
   background-color: black;
   display: flex;
 }
`

const StyledCard = styled(Card)`
  &&& {
    width: 600px;
    display: flex; 
    margin: auto; 
    justify-content: center;
    width: 320px;
    
    
  }
`;

const StyledImage = styled(Image)`
  width: 320px;
  height: 240px;
`;


export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <StyledBackground>
        </StyledBackground> 

        <Grid.Column>
          <StyledGrid>
            <Grid.Row>
          <StyledCard>
          <StyledImage />
          <Card.Content>
            <Card.Header>Projectsssss</Card.Header>
          </Card.Content>
          </StyledCard>
          </Grid.Row>
          </StyledGrid>
        </Grid.Column>

        <Grid.Column>
          <StyledGrid>
            <Grid.Row>
          <StyledCard>
          <StyledImage />
          <Card.Content>
            <Card.Header>Projectsssss</Card.Header>
          </Card.Content>
          </StyledCard>
          </Grid.Row>
          </StyledGrid>
        </Grid.Column>

        <Grid.Column>
        <StyledGrid>
            <Grid.Row>
          <StyledCard>
          <StyledImage />
          <Card.Content>
            <Card.Header>Projectsssss</Card.Header>
          </Card.Content>
          </StyledCard>
          </Grid.Row>
          </StyledGrid>
        </Grid.Column>
      </div>

    )}
}

 
