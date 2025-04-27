import React from 'react';
import TourCard from './TourCard'; // Import the TourCard component

const Gallery = ({ tours, removeTour }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Gallery;