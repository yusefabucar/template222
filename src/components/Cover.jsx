import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import ImagenPortada from './ImagenPortada';
import {AppTitle, AppTitleText } from './AppTitle';
import Typography from './Typography';
import { theme } from '../theme';
import { ButtonPrimary, ButtonSecondary } from './Button';



const CoverStyled = styled.header`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 8rem;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${theme.breakpoints.sm}{
    ${AppTitleText}{
      font-size: 2rem;
    }
  }
  ${theme.breakpoints.md}{
    ${AppTitleText}{
      font-size: 2rem;
    }
  }
  ${theme.breakpoints.lg}{
    ${AppTitleText}{
      font-size: 3rem;
    }
  }
  ${theme.breakpoints.xl}{
    ${AppTitleText}{
      font-size: 4rem;
    }
  }
`

const CoverContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  text-align: center;
  align-items: center;
  ${theme.breakpoints.sm}{
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`

const AppCoverContainerText = styled.div`
  p{
    width: auto;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    ${theme.breakpoints.sm}{
      max-width: 80%;
    }
  }
  button:last-child{
    margin-left: 1rem;
  }
`


const Cover = () => {
  return(
    <CoverStyled>
      <Container>
        <CoverContent>
          <AppCoverContainerText>
            <AppTitle/>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas amet felis
              fermentum pharetra.
            </Typography>
            <ButtonSecondary>GET STARTED</ButtonSecondary>
            <ButtonPrimary>MORE SERVICE</ButtonPrimary>
          </AppCoverContainerText>
          <ImagenPortada src="./img/portada.png"/>
        </CoverContent>
      </Container>
    </CoverStyled>
  )
}

export default Cover;