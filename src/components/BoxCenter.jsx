import React from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import { theme } from '../theme'

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 0;
  h6{
    text-transform: uppercase;
    color: ${ ( props ) => props.theme.muted}
  }
  h4{
    font-weight: 900;
  }
  h4 + h4 {
    color: ${ theme.colors.primary }
  }
`

const BoxCenter = () => {
  return(
    <Box>
      <Typography tag="h6">Our shipping</Typography>
      <Typography tag="h4">Your favorite chocolate</Typography>
      <Typography tag="h4">Try our shipments</Typography>
    </Box>
  )
}

export default BoxCenter