import { useState } from "react";

import { Button } from "../components/Button";
import { MainContainer, 
  Row, 
  Column, 
  KeyNumberContainer,
  Screen, } from "../styles/Styles";

export const Calculadora = () => {
  const [screenNum, setScreenNum] = useState('')
  const [firstNum, setFirstNum] = useState()
  const [operation, setOperation] = useState()

  const inputKey = (e) => {
    let key = e.target.value
    setScreenNum(screenNum + key)
  }

  const op = (e) => {
    let calc = e.target.value
    setFirstNum(screenNum)
    setScreenNum('')

    if (calc === '/') {
      setOperation('/')
    }
    if (calc === 'x') {
      setOperation('x')
    }
    if (calc === '-') {
      setOperation('-')
    }
    if (calc === '+') {
      setOperation('+')
    }
  }

  const calculate = () => {

    if (operation === '/') {
      setScreenNum(Number(firstNum) / Number(screenNum))
    }
    if (operation === 'x') {
      setScreenNum(Number(firstNum) * Number(screenNum))
    }
    if (operation === '-') {
      setScreenNum(Number(firstNum) - Number(screenNum))
    }
    if (operation === '+') {
      setScreenNum(Number(firstNum) + Number(screenNum))
    }
  }
  
  return(
    <MainContainer>
      <KeyNumberContainer>
        <Screen>
          <h1>{screenNum}</h1>
        </Screen>
        <Row>
          <Column>
            <Button func={inputKey} id={7}></Button>
            <Button func={inputKey} id={4}></Button>
            <Button func={inputKey} id={1}></Button>
            <Button func={inputKey} id={0}></Button>
          </Column>
          <Column>
            <Button func={inputKey} id={8}></Button>
            <Button func={inputKey} id={5}></Button>
            <Button func={inputKey} id={2}></Button>
            <Button func={inputKey} id='.'></Button>
          </Column>
          <Column>
            <Button func={inputKey} id={9}></Button>
            <Button func={inputKey} id={6}></Button>
            <Button func={inputKey} id={3}></Button>
            <Button func={calculate} id='='></Button>
          </Column>
          <Column>
            <Button func={op} id='/'></Button>
            <Button func={op} id='x'></Button>
            <Button func={op} id='-'></Button>
            <Button func={op} id='+'></Button>
          </Column>
        </Row>
      </KeyNumberContainer>
    </MainContainer>
  )
}