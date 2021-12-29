import React from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import { theme } from '../theme'

const CardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${(props ) => props.theme.cardBg };
  background-clip: border-box;
  border-radius: .8rem;
  overflow: hidden;
  margin-bottom: 1rem;
`
const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
  color: ${(props) => props.theme.color};
  h5{
    font-size: 1rem;
    font-weight: 700;
  }
`
const CardImagen = styled.img`
  width: 100%;
`


const Card = ({ title, imagen, description }) => {
  return(
    <CardStyled className="card">
      <CardImagen src={ imagen }></CardImagen>
      <CardBody>
        <Typography tag="h5">{ title }</Typography>
        <Typography>{ description }</Typography>
      </CardBody>
    </CardStyled>
  )
}


export default Card