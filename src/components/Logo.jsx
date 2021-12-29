import React from 'react';
import theme from '../theme';
import styled from 'styled-components';

const LogoStyled = styled.a`
  background-color: ${( props ) => props.theme.logoBg };
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: .5rem;
  width: 45px;
  height: 45px;
  text-decoration: none;
  i{
    font-size: 2rem;
    font-weight: bold;
    color: red;
  }
`

const Logo = () => {
  return(
    <LogoStyled href="/#">
      <i>B</i>
    </LogoStyled>
  )
}

export default Logo;