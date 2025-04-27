import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery'; // Import the Gallery component

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  };

  return (
    <div>
      <h1>Tours</h1>
      {tours.length === 0 ? (
        <h2>No tours left</h2>
      ) : (
        <Gallery tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
};

export default App;