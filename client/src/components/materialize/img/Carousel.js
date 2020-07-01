import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function Carousel() {
  useEffect(() => {
    console.log('Carousel');
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {});
  }, []);

  const imgs = [
    { src: 'https://source.unsplash.com/250x250/?iran' },
    { src: 'https://source.unsplash.com/250x250/?tajikistan' },
    { src: 'https://source.unsplash.com/250x250/?desert' },
    { src: 'https://source.unsplash.com/250x250/?river' },
    { src: 'https://source.unsplash.com/250x250/?mountains' },
  ];

  return (
    <div className="carousel">
      {imgs.map((img, i) => (
        <a className="carousel-item" href={`#${i}`} key={i}>
          <img src={img.src} alt="random-img" />
        </a>
      ))}
    </div>
  );
}
