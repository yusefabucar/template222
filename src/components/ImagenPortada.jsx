import React from 'react';
import styled from 'styled-components';
import {theme} from '../theme';

const ImagenPortadaStyled = styled.figure`
  width: 70%;
  display: block;
  ${theme.breakpoints.md}{
    width: auto;
  }
`

const PortadaImg = styled.img`
  max-width: 100%;
  height: auto;
`

const ImagenPortada = ({ src }) => {
  return(
    <ImagenPortadaStyled>
      <PortadaImg src={ src } />
    </ImagenPortadaStyled>
  )
}

export default ImagenPortada;