import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './Components/Navbar/Navbar';
import {Box} from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#21262d',
    },
    secondary:{
      main:'#FFF'
    }
  },
});
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#f6f8fa',
    },
    secondary:{
      main:'#000'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{backgroundColor:false? '#000':'white'}}>
        <BrowserRouter>
          <Navbar />  
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
