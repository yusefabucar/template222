import React from 'react';
import styled from 'styled-components';
import {theme} from '../theme';

export const AppTitleContainer = styled.div`
  margin-bottom: 1rem;
`
export const AppTitleText = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.3;
  color: ${(props) => props.theme.color};
  span{
    color: ${theme.colors.primary };
  }
`
export const AppTitle = () => {
  return(
    <AppTitleContainer>
      <AppTitleText>Buy now</AppTitleText>
      <AppTitleText>Our <span>Chocolates</span></AppTitleText>
      <AppTitleText>The best price</AppTitleText>
    </AppTitleContainer>
  )
}
