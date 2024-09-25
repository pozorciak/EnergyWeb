import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../Images/logo-biele.png'; // Použi správnu cestu k tvojmu logu

const FooterContainer = styled(Box)({
  backgroundColor: '#1e1e1e', // Čierne pozadie
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
});

const FooterLogo = styled('img')({
  height: '60px',
});

function Footer() {
  return (
    <FooterContainer>
      {/* Logo */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <FooterLogo src={logo} alt="Solving Energy logo" />
      </Box>

  
      {/* <Box mt={2} display="flex" justifyContent="center" alignItems="center" gap={4}>
        <Box display="flex" alignItems="center">
          <PhoneIcon sx={{ mr: 1 }} />  
          <Typography variant="body1" color="white">
            +421 000 000 000
          </Typography>
        </Box>

      
        <Box display="flex" alignItems="center">
          <EmailIcon sx={{ mr: 1 }} />  
          <Link href="mailto:ahoj@solvingenergy.sk" underline="none" color="inherit">
            ahoj@solvingenergy.sk
          </Link>
        </Box>
      </Box> */}

      {/* Copyright */}
      <Box mt={2}>
        <Typography variant="body2" color="white">
          © 2024 Solving Energy s. r. o.
        </Typography>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
