import AdminDashboard from "./pages/AdminDashboard";

<Route path="/admin" element={<AdminDashboard />} />
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not connected ❌"));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "24px" }}>
      {message}
    </div>
  );
}

export default App;