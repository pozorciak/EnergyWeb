import React from 'react';
import { Box, Container, Grid2, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import '../App.css';  // CSS štýly

function WelcomePage() {
  return (
    <Container
    maxWidth="xl"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,  // Flex-grow umožňuje obsahu sa rozšíriť a centrovať
      mt: 4,
      mb:4,
    }}
  >   
      {/* Header */}

      {/* Obsah stránok */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} maxWidth="xl">
          <Grid2 sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}  container spacing={6}>
            {/* Prvá karta */}
            <Grid2 item xs={12} sm={6} md={6}>
              <Card elevation={12}>
                <CardMedia
                  component="img"
                  height="250"
                  image={require("../Images/foto.jpg")}
                  alt="Obrázok 1"
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
                  <Button size="large" sx={{color:'gray', fontStyle:'italic'}}>Zisti viac</Button>
                </CardActions>
              </Card>
            </Grid2>

            {/* Druhá karta */}
            <Grid2 item xs={12} sm={6} md={6}>
              <Card elevation={20}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://www.ekolbrno.cz/img/0052-ekol/images/gallery/110502-47(2)_gallery-big.JPG"
                  alt="Obrázok 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Veľká energetika
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Toto je krátky popis druhej témy. Môže to byť čokoľvek súvisiace s tvojou stránkou.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large" sx={{color:'gray' , fontStyle:'italic'}}>Čítaj viac</Button>
                </CardActions>
              </Card>
            </Grid2>

           </Grid2>
        </Container>
      </Box>

      {/* Footer */}
    </Container>
  );
}

export default WelcomePage;
