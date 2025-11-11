import { useState } from "react";
import { registerUser } from "../api";

const RegistrationForm = ({ onBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await registerUser(name, email);
    setResponse(res);
    setLoading(false);
  };

  if (response) {
    return (
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xl w-full mx-auto mt-10 text-center">
        {response.status === "registered" ? (
          <>
            <h2 className="text-green-600 text-2xl font-bold mb-2">✅ Registration Successful!</h2>
            <p>
              Your Registration ID: <strong>{response.registrationId}</strong>
            </p>
            <p>Seats Left: {response.seatsLeft}</p>
          </>
        ) : (
          <>
            <h2 className="text-yellow-600 text-2xl font-bold mb-2">⚠️ Waitlisted</h2>
            <p>{response.message}</p>
          </>
        )}
        <button
          onClick={() => {
            setResponse(null);
            onBack();
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg w-full mt-4"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-6 max-w-xl w-full mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">Register for Workshop</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-3"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-3"
      />

      <button
        type="submit"
        disabled={loading}
        className={`bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg w-full ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      <button
        type="button"
        onClick={onBack}
        className="text-gray-600 underline text-sm mt-4 w-full"
      >
        Back
      </button>
    </form>
  );
};

export default RegistrationForm;
