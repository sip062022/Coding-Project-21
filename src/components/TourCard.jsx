import React from 'react'; // Import React

const TourCard = ({ tour, removeTour }) => { // TourCard component to display individual tour details
  const { id, name, info, image, price } = tour; // Destructure the tour object to get individual properties

  return (  // TourCard component to display individual tour details
    <li style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', listStyle: 'none' }}>
      <img src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h2>{name}</h2>
      <p>{info}</p>
      <h3>Price: ${price}</h3>
      <button onClick={() => removeTour(id)} style={{ background: 'red', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>
        Not Interested
      </button>
    </li>
  );
};

export default TourCard; // Export the TourCard component