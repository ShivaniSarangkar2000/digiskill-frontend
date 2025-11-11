import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkshopInfo() {
  const [data, setData] = useState({ seatsAvailable: 0, price: 0 });

  useEffect(() => {
    axios.get("http://localhost:8080/api/workshop")
      .then(res => setData(res.data))
      .catch(err => console.error("Error fetching workshop:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Seats Available: {data.seatsAvailable}</h2>
      <h3>Price: ₹{data.price}</h3>
    </div>
  );
}

export default WorkshopDetails;
