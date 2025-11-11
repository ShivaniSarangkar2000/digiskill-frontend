import { useEffect, useState } from "react";
import { getWorkshopData } from "../api";

const WorkshopDetails = ({ onRegister }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getWorkshopData().then(setData);
  }, []);

  if (!data) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xl w-full mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
        {data.name}
      </h1>
      <p className="text-gray-600 text-center mb-2">
        Start Date: <strong>{data.startDate}</strong>
      </p>
      <p className="text-gray-600 text-center mb-2">
        Platform: <strong>{data.platform}</strong>
      </p>
      <p className="text-gray-600 text-center mb-2">
        Seats Left: <strong>{data.seatsLeft}</strong>
      </p>

      <div className="text-center my-4">
        <p className="text-2xl font-semibold text-green-600">
          ₹{data.price}
        </p>
        <p className="text-gray-500">{data.priceLabel}</p>
      </div>

      <button
        onClick={onRegister}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg w-full mt-3"
      >
        Register Now
      </button>
    </div>
  );
};

export default WorkshopDetails;
