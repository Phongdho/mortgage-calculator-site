import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #383F50;
    color: white;
    margin: 0;
    display: flex;
    position: relative;
`
const Left = styled.div`
    flex: 1;
    margin-left: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 739px) {
      margin-right: 15vw;
      margin-left: 15vw;
      }
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: 800;
    @media (max-width: 739px) {
      font-size: 30px;
    }
    @media (max-width: 1280px) {
      font-size: 30px;
    }
`

const Desc = styled.p`
  @media (max-width: 739px) {
     font-size: 14px; 
  }
  margin-bottom: 30px;
  font-size: 24px;
  opacity: 0.8;
`

const Right = styled.div`
    flex: 1;
    position: relative;
    @media (max-width: 739px) {
        flex: 0;
    }
    @media (max-width: 667px) {
      display: none;
  }
`
const HeroImage = styled.img`
    width: 700px;
    border-radius: 3px;
    position: absolute;
    bottom: 0;
    right: 0;
    @media (max-width: 739px) {
        display: none;
      }
      @media (max-width: 1280px) {
        display: none;
      }
` 

const Button = styled.button`
    padding: 10px 20px;
    background-color: #FF8049;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.05);
`
const ComponentName = () => {
    const data = useStaticQuery(graphql`
      {
        contentfulHero {
          button
          slug
          title
          image {
            file {
              url
            }
          }
          description
        }
      }
    `)
    return (
        <Container>
            <Left>
                <Title>{data.contentfulHero.title}</Title>
                <Desc>{data.contentfulHero.description}</Desc>
                <Button>{data.contentfulHero.button}</Button>
            </Left>
            <Right>
                <HeroImage src={"https:" + data.contentfulHero.image.file.url} />
            </Right>
        </Container>
    )
}

export default ComponentName