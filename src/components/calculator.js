import React, {useState} from 'react'
import styled from "styled-components"
import "./calculator.css"

const Container = styled.div`
    display: flex;
    @media (max-width: 739px) {
        flex-direction: column;
    }
    @media (max-width: 1280px) {
        flex-direction: column;
    }

`
const Left = styled.div`
    flex: 1;
    background-color: #383F50;
    color: white;
    padding-left: 10vw;
    padding-top: 3vh;
    padding-bottom: 3vh;
`

const LeftTitle = styled.h1`
    font-size: 50px;
`

const LeftDesc = styled.p`
    font-size: 18px;
    line-height: 180%;
    padding-right: 50px;
`

const Wrapper =styled.div`
    display: flex;
    flex-wrap: wrap;
`

const InputTitle = styled.div`
    font-size: 18px;
    font-weight: 800;
`
const Right = styled.div`
    flex: 1;
    background-color: #FBFDFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10vw;
    padding-right: 10vw;
    
`
const CalTitle = styled.h1`
    font-size: 60px;
    font-weight: 800;
    letter-spacing: 0.01em;
    color: #27292E;
`

const CalDesc = styled.h5`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 180%;
    color: #585C65;
`

const CalButton = styled.button`
    background: #FF8049;
    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.05);
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 800;
    line-height: 180%;
    width: 152px;
`


const Calculator = () => {
  const [purchase, setPurchase]= useState(450000)
  const [payment, setPayment]= useState(135000)
  const [repayment, setRepayment]= useState(25)
  const [interest, setInterest]= useState(3)

  let monthlyPayment = (purchase - payment)*((interest/12/100)*((1+interest/12/100)**(repayment*12))/((1+interest/12/100)**(repayment*12) - 1));
    // console.log((1+interest/12/100)**(repayment*12), "hello");
  const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {
        // style:'currency',
        currency: 'USD'
    }).format(number)
    return newNumber
}

  const updateFilter = (e) => {
    let name = e.target.name
  
    if(name === 'purchase'){
      setPurchase(Number(e.target.value))
    } else if (name === 'payment'){
        setPayment(Number(e.target.value))
    }  else if (name === 'time'){
      setRepayment(Number(e.target.value))
    } else if (name === 'interest'){
      setInterest(Number(e.target.value))
    }
  }
  return (
    <Container>
        <Left>
            <LeftTitle>Mortgage Calculator</LeftTitle>
            <LeftDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</LeftDesc>
            <Wrapper>
               
                <div className="form-control" style={{width:"35%", padding:'10px 20px 10px 0'}}>
                    <InputTitle>Purchase Price: ${formatPrice(purchase)}</InputTitle>

                    <input 
                    type="range" 
                    name="purchase" 
                    onChange={updateFilter} 
                    min='0' 
                    max='1000000' 
                    value={purchase}
                    />
                </div>

                <div className="form-control" style={{width:"35%", padding:'10px 20px 10px 0'}}>
                    <InputTitle>Down Payment: ${formatPrice(payment)}</InputTitle>

                    <input 
                    type="range" 
                    name="payment" 
                    onChange={updateFilter} 
                    min='0' 
                    max='300000'  
                    value={payment}
                    />
             
                </div>

                <div className="form-control" style={{width:"35%", padding:'10px 20px 10px 0'}}>
                    <InputTitle>Repayment time: {repayment} years</InputTitle>

                    <input 
                    type="range" 
                    name="time" 
                    onChange={updateFilter} 
                    min='0' 
                    max='100'  
                    value={repayment}
                    />
                </div>

                <div className="form-control" style={{width:"35%", padding:'10px 20px 10px 0'}}>
                    <InputTitle>Interest Rate: {interest}%</InputTitle>

                    <input 
                    type="range" 
                    name="interest" 
                    onChange={updateFilter} 
                    min='0' 
                    max='20'  
                    value={interest}
                    />
                </div>
            </Wrapper>
                <h3>Loan amount: ${formatPrice(purchase - payment)}</h3>
                <h3>Estimated repayment per month: $ {formatPrice(monthlyPayment)}</h3>
               
        </Left>
        <Right>
            <CalTitle>Try our awesome Calculator</CalTitle>
            <CalDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</CalDesc>
            <CalButton>Register</CalButton>
        </Right>
    </Container>
  )
}

export default Calculator