import { useState } from 'react'
import Home from './pages/home/Home'
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme.js';

function App() {
  return (
     <div className="App">
       <ThemeProvider theme={theme}>
      <Home/>
      </ThemeProvider>
     </div>
  )
}

export default App
