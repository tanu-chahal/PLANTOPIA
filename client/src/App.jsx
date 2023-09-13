import { useState } from 'react'
import Home from './pages/home/Home'
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme.js';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
     <div className="App">
       <ThemeProvider theme={theme}>
      <Navbar/>
      <Home/>
      <Footer/>
      </ThemeProvider>
     </div>
  )
}

export default App
