import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
// import ReCAPTCHA from 'react-google-recaptcha';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
//   const [captchaValue, setCaptchaValue] = useState(null); // Ukladá stav pre captcha

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleCaptchaChange = (value) => {
    // setCaptchaValue(value); // Aktualizuje hodnotu captcha
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Skontroluj, či je captcha platná
    // if (!captchaValue) {
    //   alert('Prosím, overte, že nie ste robot!');
    //   return;
    // }

    // Ak je captcha overená, odoslať formulár
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
        flexGrow: 1,
        mt: 4,
        mb: 4,
      }}
    >
      <Typography variant="h5" align="center" >
        Solving Energy s. r. o.
      </Typography>

      {/* Kontaktné údaje */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <PhoneIcon color="gray" />
        </Grid>
        <Grid item>
          <Typography color="gray" variant="body1">
            +421 000 000 000
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 4 }}>
        <Grid item>
          <EmailIcon />
        </Grid>
        <Grid item>
          <Typography color="gray" variant="body1">
            ahoj@solvingenergy.sk
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ width: '100%', my: 4 }} />

      <Typography variant="h4" align="center"  sx={{ mb: 1 }}>
        Kontaktujte nás
      </Typography>

      <Paper
        align="center"
        elevation={3}
        sx={{
          m: 4,
          width: '100%',
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} sx={{ p: 4 }}>
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
            <Grid item xs={12}>
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

            {/* reCAPTCHA komponent */}
            {/* <Grid item xs={12} align="center">
              <ReCAPTCHA
                sitekey="6Lf-OlMqAAAAAA6Zt9AKVYNbagzf7uDoTWuu1Xo9" // Nahraď svojím Google reCAPTCHA site kľúčom
                onChange={handleCaptchaChange}
              />
            </Grid> */}

            <Grid item xs={12} align="center">
              <Button
                variant="contained"
                type="submit"
                style={{ borderRadius: 50 }}
                sx={{
                  backgroundColor: 'green',
                  '&:hover': { backgroundColor: '#333' },
                }}
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
