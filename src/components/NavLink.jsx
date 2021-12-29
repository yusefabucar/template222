import React from 'react';
import styled from 'styled-components';

const NavLinkStyled = styled.a`
  display: block;
  padding: .5rem 1rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.linkColor };
`

const NavLink = ({ children, href }) => {
  return(
    <NavLinkStyled href={ href }>
      { children }
    </NavLinkStyled>
  )
}

export default NavLink;