// Task 1: Set up API and App Structure //
import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery'; // Import the Gallery component

const App = () => {  // Main App component
  const [tours, setTours] = useState([]); // State to hold the tours data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  const fetchTours = async () => { // Function to fetch tours data from the API
    setLoading(true); // Set loading to true before fetching
    setError(null); // Reset error state

    try {
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'); // changed URL to fix CORS issues
      if (!response.ok) { // Check if the response is ok
        throw new Error('Failed to fetch tours'); // Throw an error if not
      }
      const data = await response.json(); // Parse the JSON data
      setTours(data); // Set the tours state with the fetched data
    } catch (err) { // Catch any errors during the fetch
      setError(err.message); // Set the error state with the error message
    } finally {   // Finally, set loading to false
      setLoading(false); // Set loading to false
    }
  };

  useEffect(() => { // useEffect to fetch tours data when the component mounts
    fetchTours(); // Call the fetchTours function
  }, []); //  Empty dependency array to run only once

  const removeTour = (id) => { // Function to remove a tour by id
    setTours(tours.filter((tour) => tour.id !== id)); //  Filter out the tour with the given id
  };

  if (loading) { // If loading, show a loading message
    return <h2>Loading...</h2>; // Show loading message
  }

  if (error) { // If there is an error, show an error message
    return <h2>Error: {error}</h2>; // Show error message if there is an error
  }

  return ( // Render the main component
    <div>
      <h1>Tours</h1>
      {tours.length === 0 ? (
        <div>
          <h2>No tours left</h2>
          <button
            onClick={fetchTours}
            style={{
              padding: '10px 20px',
              background: 'blue',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Refresh
          </button>
        </div>
      ) : (
        <Gallery tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
};

export default App; // Export the App component