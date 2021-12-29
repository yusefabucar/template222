import React from 'react'
import styled from 'styled-components';

const NavStyle = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`

const Nav = ({ children }) => {
  return(
    <NavStyle>{ children }</NavStyle>
  )
}

export default Nav;