import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Ukážkové obrázky pre carousel
const carouselItems = [
  {
    img: 'https://www.fenixgroup.cz/sites/default/files/styles/technologie/public/fotovoltaika_0.jpg?itok=yJDBR2iW',
    label: 'Prvý obrázok',
    buttonText: 'Viac informácií',
  },
  {
    img: 'https://via.placeholder.com/800x400',
    label: 'Druhý obrázok',
    buttonText: 'Viac informácií',
  },
  {
    img: 'https://via.placeholder.com/800x400',
    label: 'Tretí obrázok',
    buttonText: 'Viac informácií',
  },
];

// Styled komponent pre obrázok v karusele
const CarouselImage = styled('img')({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
});

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funkcia na posun dopredu
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  // Funkcia na posun dozadu
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ width: '100%', position: 'relative', mt: 3 }}>
      {/* Zobrazenie obrázka */}
      <CarouselImage src={carouselItems[currentIndex].img} alt={carouselItems[currentIndex].label} />
      
      {/* Popis obrázka a tlačidlo */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {carouselItems[currentIndex].label}
        </Typography>
        <Button variant="contained" color="primary">
          {carouselItems[currentIndex].buttonText}
        </Button>
      </Box>

      {/* Tlačidlá pre posun */}
      <Button
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        Predchádzajúci
      </Button>
      <Button
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        Ďalší
      </Button>
    </Box>
  );
}

export default ImageCarousel;
