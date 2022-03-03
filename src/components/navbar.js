import React from 'react'
import logo1 from "../images/logo1.png"
import styled from "styled-components"


const Container = styled.div`
    background-color: #383F50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
`

const Left = styled.div`
    flex: 1;
    margin-left: 10vw;
`

const Logo = styled.img`
    @media (max-width: 739px) {
        width: 100px
    }
    @media (max-width: 1280px) {
        width: 100px;
    }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10vw;
`

const Desc = styled.div`
    color: #FFFFFF;
    margin-right: 25px;
    font-size: 18px;
    @media (max-width: 739px) {
        font-size: 14px;
    }
    @media (max-width: 1280px) {
        font-size: 14px;
    }
`

const Navbar = () => {
  return (
    <Container>
        <Left>
            <Logo src={logo1}/>
        </Left>
        <Right>
            <Desc>Calculator</Desc>
            <Desc>Services</Desc>
        </Right>
    </Container>
  )
}

export default Navbar
