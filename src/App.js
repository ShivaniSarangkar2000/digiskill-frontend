import React, { useState } from "react";
import WorkshopInfo from "./components/WorkshopInfo";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {showForm ? (
        <RegistrationForm onBack={() => setShowForm(false)} />
      ) : (
        <WorkshopInfo onRegister={() => setShowForm(true)} />
      )}
    </div>
  );
}

export default App;
