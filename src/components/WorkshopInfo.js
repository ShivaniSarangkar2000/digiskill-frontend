import React, { useEffect, useState } from "react";
import { getWorkshopData } from "../api";

const WorkshopInfo = ({ onRegister }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getWorkshopData()
      .then((res) => setData(res))
      .catch(() => setError("Failed to load workshop details"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-gray-400 mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xl w-full mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">{data.workshopName}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Seats Left:</strong> {data.seatsAvailable}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Platform:</strong> {data.platform || "Online"}
      </p>
      <p className="text-2xl font-semibold text-green-600 mb-1">₹{data.price}</p>
      <p className="text-gray-500 mb-4">{data.priceLabel || "One-time fee"}</p>

      <button
        onClick={onRegister}
        disabled={data.seatsAvailable <= 0}
        className={`bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg w-full mt-3 ${
          data.seatsAvailable <= 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {data.seatsAvailable <= 0 ? "Sold Out" : "Register Now"}
      </button>
    </div>
  );
};

export default WorkshopInfo;
