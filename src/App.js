import { useState } from "react";
import WorkshopDetails from "./components/WorkshopDetails";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center px-4">
      {!showForm ? (
        <WorkshopDetails onRegister={() => setShowForm(true)} />
      ) : (
        <RegistrationForm onBack={() => setShowForm(false)} />
      )}
      <footer className="text-white mt-8 text-sm">
        © 2025 Digiskill Academy | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
