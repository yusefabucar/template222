import React from 'react';
import styled from 'styled-components';


const NavbarStyled = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: .5rem;
  padding-bottom: .5rem;
  .container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`

const Navbar = ({ list, children }) => {
  return(
    <NavbarStyled className="appbar">
      { children }
    </NavbarStyled>
  )
}

export default Navbar;
