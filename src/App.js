import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {theme } from './theme'
import GlobalStyles from './template/GlobalStyles'
import Navbar from './components/Navbar'
import Container from './components/Container'
import Logo from './components/Logo'
import Nav from './components/Nav'
import NavLink from './components/NavLink'
import SwithTheme from './components/SwitchTheme'
import Cover from './components/Cover'
import { Section } from './components/Section'
import BoxCenter from './components/BoxCenter'
import ButtonFloat from './components/ButtonFloat'
import Card from './components/Card'
import {CardLayout, CardLayoutCol} from './components/CardLayout'
import Footer from './template/Footer'


const App = () => {

  const links = [ 'Home', 'Services', 'Menu', 'Contact']
  const [ mode, setMode ] = useState("light");
  const toggleTheme = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  }

  return (
    <ThemeProvider theme={mode === 'light' ? theme.light : theme.dark}>
      <GlobalStyles/>
      <div className="App">
        <Navbar>
          <Container>
          <Logo/>
            <Nav>
              {
                links.map((item, index) => (
                  <li key={ index }>
                    <NavLink href="/#">{ item }</NavLink>
                  </li>
                ))
              }
            </Nav>
            <SwithTheme onChange={()=> toggleTheme()}></SwithTheme>
          </Container>
        </Navbar>
        <Cover/>
        <Section>
          <Container>
            <ButtonFloat></ButtonFloat>
            <BoxCenter/>
            <CardLayout>
              <CardLayoutCol>
                <Card 
                  title="Chocolates" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." 
                  imagen="https://unsplash.com/photos/29cSQWislZU/download?force=true&w=640"/>
              </CardLayoutCol>
              <CardLayoutCol>
                <Card 
                  title="Chocolates" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing eliteiusmod tempor." 
                  imagen="https://unsplash.com/photos/P86sBT225NU/download?force=true&w=640"/>
              </CardLayoutCol>
              <CardLayoutCol>
                <Card 
                  title="Chocolates" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor." 
                  imagen="https://unsplash.com/photos/SswTJ1Yp03Y/download?force=true&w=640"/>
              </CardLayoutCol>
              <CardLayoutCol>
                <Card 
                  title="Chocolates" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dotempor." 
                  imagen="https://unsplash.com/photos/ZmH0g1ievTg/download?force=true&w=640"/>
              </CardLayoutCol>
              
            </CardLayout>
          </Container>
        </Section>
        <Footer />       
      </div>
    </ThemeProvider>
  );
};

export default App;
