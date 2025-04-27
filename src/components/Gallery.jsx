import React from 'react'; // Import React
import TourCard from './TourCard'; // Import the TourCard component

const Gallery = ({ tours, removeTour }) => { // Gallery component to display the list of tours
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} /> // Map through the tours and render a TourCard for each
      ))}
    </div>
  );
};

export default Gallery; // Export the Gallery component