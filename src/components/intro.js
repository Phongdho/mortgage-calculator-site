import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FBFDFF;
`;

const IntroHeader = styled.h1`
    text-align: center;
    font-size: 40px;
    @media (max-width: 739px) {
        font-size: 30px;
    }
`

const Wrapper = styled.div`
    display: flex;
    @media (max-width: 1024px) {
        flex-direction: column;
        flex-wrap: wrap;
    }
`

const Card = styled.div`
    width: 356px;
    height: 408px;
    background-color: #fff;
    box-shadow: 0px 4px 120px rgba(58, 86, 78, 0.07);
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 739px) {
        width: 250px;
    }
`

const IconWrapper = styled.div`
    display: flex;
`
const IconContainer = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF8049;
    margin-bottom: 10px;
`

const Icon = styled.img`
`

const IconTitle = styled.h2`
    color: #27292E;
    @media (max-width: 739px) {
        font-size: 20px;
    }
`

const IconDesc = styled.p`
    color: #5F626B;
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
    line-height: 1.4;
    @media (max-width: 739px) {
        font-size: 14px;
    }
`

const Intro = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulIntro {
        edges {
          node {
            title
            description
            slug
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Container>
        <IntroHeader>High Quality Output, Awesome Service</IntroHeader>
        <Wrapper>
            {data.allContentfulIntro.edges.map((item) => (
                <Card>
                    <IconWrapper>
                        <IconContainer>
                            <Icon src={"https:" + item.node.icon.file.url}/>
                        </IconContainer>
                    </IconWrapper>
                    <IconTitle>{item.node.title}</IconTitle>
                    <IconDesc>{item.node.description}</IconDesc>
                </Card>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Intro