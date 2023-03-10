import { useState } from 'react'
import StepsForm from './components/StepsForm';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container'
import Banner from './components/Banner';
import theme from './components/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <Banner />
        <StepsForm />
      </Container>
    </ThemeProvider>
  );
}

export default App
