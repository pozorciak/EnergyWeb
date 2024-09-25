import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS


function BootstrapCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"  // Zabezpečí, že obrázok vyplní celý priestor
          src="https://via.placeholder.com/800x400"
          alt="Prvý obrázok"
        />
        <Carousel.Caption>
          <h3>Prvý obrázok</h3>
          <p>Toto je popis prvého obrázku.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://via.placeholder.com/800x400"
          alt="Druhý obrázok"
        />
        <Carousel.Caption>
          <h3>Druhý obrázok</h3>
          <p>Toto je popis druhého obrázku.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://via.placeholder.com/800x400"
          alt="Tretí obrázok"
        />
        <Carousel.Caption>
          <h3>Tretí obrázok</h3>
          <p>Toto je popis tretieho obrázku.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;
