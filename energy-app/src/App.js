import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Pages/WelcomePage';
import ContactPage from './Pages/ContactPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider pre aplikáciu témy
import theme from './Styles/theme';  // Import témy
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          {/* Flex-grow znamená, že tento kontajner zaberie zostávajúci priestor */}
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/kontakt" element={<ContactPage />} />
            </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
