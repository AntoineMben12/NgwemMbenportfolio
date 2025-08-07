import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import './dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const navigate = useNavigate();
  const isAdmin = !!localStorage.getItem('adminToken');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
      return;
    }
    fetch("https://ngwemmbenbackend.onrender.com/api/forms")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch messages");
        setLoading(false);
      });
  }, [isAdmin, navigate]);

  // Example data for the graph (replace with real stats if available)
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Messages",
        data: [2, 4, 3, 5, 1, 6], // Example data
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Contact Messages Per Month" },
    },
  };

  // ...existing code...

  return (
    <>
      <SideBar />
      <RightSidBar />
      <div className="dashboard-main">
        <div className="dashboard-chart-container">
          <Bar data={data} options={options} />
        </div>
        <div className="dashboard-messages-container">
          <h2 className="dashboard-messages-title">Contact Messages</h2>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="dashboard-error">{error}</div>
          ) : messages.length === 0 ? (
            <div>No messages found.</div>
          ) : (
            <div className="dashboard-table-wrapper">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th className="dashboard-table-header">Name</th>
                    <th className="dashboard-table-header">Email</th>
                    <th className="dashboard-table-header">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg, idx) => (
                    <tr key={msg._id || idx} className="dashboard-table-row">
                      <td className="dashboard-table-cell">{msg.name}</td>
                      <td className="dashboard-table-cell">{msg.email}</td>
                      <td className="dashboard-table-cell">{msg.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
