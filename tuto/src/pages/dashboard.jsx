import { useEffect, useState } from "react";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Placeholder admin check (replace with real auth logic)
  const isAdmin = true; // Set to false to simulate non-admin
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAdmin) {
      fetch("http://localhost:5000/api/forms")
        .then((res) => res.json())
        .then((data) => {
          setMessages(data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to fetch messages");
          setLoading(false);
        });
    }
  }, [isAdmin]);

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

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        Access denied. Admins only.
      </div>
    );
  }

  return (
    <>
      <SideBar />
      <RightSidBar />
      <div className="min-h-screen flex flex-col items-center justify-start bg-black pt-24 px-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6 mb-8">
          <Bar data={data} options={options} />
        </div>
        <div className="w-full max-w-4xl bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : messages.length === 0 ? (
            <div>No messages found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg, idx) => (
                    <tr key={msg._id || idx} className="border-t">
                      <td className="px-4 py-2">{msg.name}</td>
                      <td className="px-4 py-2">{msg.email}</td>
                      <td className="px-4 py-2">{msg.message}</td>
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
