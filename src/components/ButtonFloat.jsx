import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../theme'
import Arrow from './IconArrow'

const ButtonFloatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`
const ButtonFloatStyled = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background-color: ${ theme.colors.primary };
  position: relative;
  box-shadow: 0 0 0 0 #ffffff08;
  animation: pulse 5s infinite;
  ${ButtonFloatContent} & {
    margin-top: -2.3rem;
  }
  @keyframes pulse {
    0% {box-shadow: 0 0 0 0px #ffffff01}
    50% {box-shadow: 0 0 0 30px #ffffff08}
    100% {box-shadow: 0 0 0  0px #ffffff02}
  }
`

const ButtonFloat = () => {
  return(
    <ButtonFloatContent>
      <ButtonFloatStyled href="/#">
        <Arrow size={30}></Arrow>
      </ButtonFloatStyled>
    </ButtonFloatContent>
  )
}

export default ButtonFloat