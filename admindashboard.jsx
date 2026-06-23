import { useEffect, useState } from "react";

function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/dashboard", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>👤 Users: {stats.users}</div>
        <div>📝 Posts: {stats.posts}</div>
      </div>
    </div>
  );
}

export default AdminDashboard;