import { useState } from 'react'
import StepsForm from './components/StepsForm';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container'
import Banner from './components/Banner';
import customTheme from './components/theme';
import StyledCustomization from './components/test';

function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth='md'>
        <Banner />
        <StepsForm />
        <StyledCustomization />
      </Container>
    </ThemeProvider>
  );
}

export default App
