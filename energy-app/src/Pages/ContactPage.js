import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,  // Flex-grow umožňuje obsahu sa rozšíriť a centrovať
        mt: 4,
      }}
    >
      <Typography  variant="h5" align="center" gutterBottom>
        Solving Energy s. r. o.
      </Typography>

      {/* Kontaktné údaje */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <PhoneIcon color='gray'/>
        </Grid>
        <Grid item>
          <Typography color='gray' variant="body1">+421 000 000 000</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
        <Grid item>
          <EmailIcon />
        </Grid>
        <Grid item>
          <Typography color='gray' variant="body1">ahoj@solvingenergy.sk</Typography>
        </Grid>
      </Grid>

      {/* Divider pred nadpisom "Kontaktujte nás" */}
      <Divider sx={{ width: '100%', my: 4 }} />  {/* Divider s hornou a dolnou medzerou */}

      <Typography  variant="h4" align="center" gutterBottom sx={{ mb: 1 }}>
        Kontaktujte nás
      </Typography>

      {/* Formulár v Paper komponente */}
      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 4,
          width: '100%',
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Meno"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                label="Správa"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} align="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ backgroundColor: '#222', '&:hover': { backgroundColor: '#333' } }}
              >
                ODOSLAŤ
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default ContactPage;
