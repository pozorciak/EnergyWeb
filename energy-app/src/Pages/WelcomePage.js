import React from 'react';
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../App.css';  // CSS štýly

function WelcomePage() {
  const navigate = useNavigate();  // Inicializácia useNavigate

  const handleNavigate = (path) => {
    navigate(path);  // Funkcia na presmerovanie
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        backgroundImage: `url(${require('../Images/background.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 0,
        margin: 0,
        width: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          {/* Prvá karta */}
          <Grid item xs={12} sm={6} mt={2} mb={2}>
            <Card 
              elevation={12} 
              sx={{
                borderRadius: '16px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer'  // Pridanie ukazovateľa ruky pri hover
                },
              }}
              onClick={() => handleNavigate('/mala-energetika')}  // Presmerovanie po kliknutí
            >
              <CardMedia
                component="img"
                height="250"
                image={require("../Images/foto.jpg")}
                alt="Malá energetika"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Malá energetika
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Toto je krátky popis prvej témy. Môže to byť čokoľvek súvisiace s tvojou stránkou.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" style={{ borderRadius: 50 }} sx={{ color: 'gray', fontStyle: 'italic' }}>Zisti viac</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Druhá karta */}
          <Grid item xs={12} sm={6} mt={2} mb={2}>
            <Card 
              elevation={12} 
              sx={{
                // backgroundColor: '#1e1e1e', 
                borderRadius: '16px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer'  // Pridanie ukazovateľa ruky pri hover
                },
              }}
              onClick={() => handleNavigate('/velka-energetika')}  // Presmerovanie po kliknutí
            >
              <CardMedia
                component="img"
                height="250"
                image={require("../Images/turbina.jpg")}
                alt="Veľká energetika"
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  Veľká energetika
                </Typography>
                <Typography variant="body2" color="gray">
                  Toto je krátky popis prvej témy. Môže to byť čokoľvek súvisiace s tvojou stránkou.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" sx={{ color: 'gray', fontStyle: 'italic' }}>Čítaj viac</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WelcomePage;
