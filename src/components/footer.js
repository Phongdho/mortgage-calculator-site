import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import logo2 from "../images/logo2.png"

const Container = styled.div`
    display: flex;
    background-color: #FBFDFF;
    padding-bottom: 20px;
    padding-top: 20px;
    @media (max-width: 739px) {
        flex-direction: column;
    }
    @media (max-width: 1280px) {
        flex-direction: column;
    }
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
    padding-top: 20px;
    padding-bottom: 20px;
    @media (max-width: 739px) {
        justify-content: center;
        align-items: flex-start;
        margin: 5vh 5vw;
    }
    @media (max-width: 1280px) {
        justify-content: center;
        align-items: flex-start;
        margin: 5vh 5vw;
    }
`

const Logo = styled.img`
    width: 243px;
    @media (max-width: 739px) {
        width: 150px
    }
    @media (max-width: 1280px) {
        width: 150px;
    }
`

const Desc = styled.p`
    margin: 20px 0px;
    color: #585C65;
    font-size: 20px;
    @media (max-width: 739px) {
        font-size: 14px;
    }
    @media (max-width: 1280px) {
        font-size: 14px;
    }
`

const MediaContainer = styled.div`
    display: flex;
`

const MediaIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #FF8049;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Right = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    line-height: 180%;
    @media (max-width: 739px) {
        padding-bottom: 4vh;
    }
    @media (max-width: 1280px) {
        padding-bottom: 4vh;
    }
`
const ListContainer = styled.div``

const Title = styled.div`
    color: #40434A;
    font-size: 20px;
    @media (max-width: 739px) {
        font-size: 14px;
    }
    @media (max-width: 1280px) {
        font-size: 14px;
    }
`

const List = styled.div`
    padding-top: 10px;
`

const ListItem = styled.div`
    color: #70737C;
    font-size: 18px;
    padding-top: 10px;
    @media (max-width: 739px) {
        font-size: 14px;
    }
    @media (max-width: 1280px) {
        font-size: 14px;
    }
`




const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo src={logo2}/>
                <Desc>2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet</Desc>
                <MediaContainer>
                    <MediaIcon>
                        <Facebook />
                    </MediaIcon>
                    <MediaIcon>
                        <Twitter />
                    </MediaIcon>
                    <MediaIcon>
                        <Instagram />
                    </MediaIcon>
                </MediaContainer>
            </Left>
            <Right>
                <ListContainer>
                    <Title>Location</Title>
                        <List> 
                            <ListItem>America</ListItem>
                            <ListItem>Asia</ListItem>
                            <ListItem>Europe</ListItem>
                            <ListItem>Africa</ListItem>
                        </List>
                </ListContainer>
                <ListContainer>
                    <Title>Contact</Title>
                        <List> 
                            <ListItem>About me</ListItem>
                            <ListItem>Teams</ListItem>
                            <ListItem>Profile</ListItem>
                            <ListItem>FAQ</ListItem>
                        </List>
                </ListContainer>
                <ListContainer>
                    <Title>Legal</Title>
                        <List> 
                            <ListItem>Privacy</ListItem>
                            <ListItem>Disclaimer</ListItem>
                            <ListItem>Terms</ListItem>
                            <ListItem>Company</ListItem>
                        </List>
                </ListContainer>
            </Right>
        </Container>
    )
}

export default Footer