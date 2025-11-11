import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [workshop, setWorkshop] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/workshop')
      .then(response => {
        setWorkshop(response.data);
      })
      .catch(error => {
        console.error('Error fetching workshop:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{workshop.workshopName}</h1>
      <p>Seats Available: {workshop.seatsAvailable}</p>
      <p>Price: ₹{workshop.price}</p>
    </div>
  );
}

export default App;
