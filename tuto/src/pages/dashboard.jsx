import { useEffect, useState, useRef } from "react";
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
import { 
  dashboardEntranceAnimation, 
  chartRevealAnimation, 
  tableRowAnimation,
  loadingPulseAnimation,
  cardHoverEffect,
  counterAnimation
} from '../lib/gsapAnimations';
import './dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Placeholder admin check (replace with real auth logic)
  const isAdmin = true; // Set to false to simulate non-admin
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Refs for animations
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const topbarRef = useRef(null);
  const chartContainerRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const loadingRef = useRef(null);
  const tableRowsRef = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    if (isAdmin) {
      fetch("https://ngwemmbenbackend.onrender.com/api/forms")
        .then((res) => res.json())
        .then((data) => {
          setMessages(data);
          setLoading(false);
          
          // Animate table rows after data loads
          setTimeout(() => {
            if (tableRowsRef.current.length > 0) {
              tableRowAnimation(tableRowsRef.current);
            }
          }, 100);
        })
        .catch(() => {
          setError("Failed to fetch messages");
          setLoading(false);
        });
    }
  }, [isAdmin]);

  // Dashboard entrance animation
  useEffect(() => {
    const container = containerRef.current;
    const sidebar = sidebarRef.current;
    const topbar = topbarRef.current;
    const chart = chartContainerRef.current;
    const messagesContainer = messagesContainerRef.current;

    if (container && sidebar && topbar && chart && messagesContainer) {
      dashboardEntranceAnimation(container, sidebar, topbar, chart, messagesContainer);
    }

    // Add hover effects to containers
    if (chart) {
      const chartHover = cardHoverEffect(chart);
      chart.addEventListener('mouseenter', () => chartHover.play());
      chart.addEventListener('mouseleave', () => chartHover.reverse());
    }

    if (messagesContainer) {
      const messagesHover = cardHoverEffect(messagesContainer);
      messagesContainer.addEventListener('mouseenter', () => messagesHover.play());
      messagesContainer.addEventListener('mouseleave', () => messagesHover.reverse());
    }

    // Animate stats counter if available
    if (statsRef.current && messages.length > 0) {
      counterAnimation(statsRef.current, messages.length);
    }
  }, []);

  // Loading animation
  useEffect(() => {
    if (loading && loadingRef.current) {
      loadingPulseAnimation(loadingRef.current);
    }
  }, [loading]);

  // Chart reveal animation when data is ready
  useEffect(() => {
    if (!loading && chartContainerRef.current) {
      const chartCanvas = chartContainerRef.current.querySelector('canvas');
      if (chartCanvas) {
        setTimeout(() => {
          chartRevealAnimation(chartContainerRef.current, chartCanvas);
        }, 500);
      }
    }
  }, [loading]);

  // Example data for the graph (replace with real stats if available)
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Messages",
        data: [2, 4, 3, 5, 1, 6], // Example data
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: { 
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
        }
      },
      title: { 
        display: true, 
        text: "Contact Messages Per Month",
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: 20
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,0,0,0.1)',
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    }
  };

  if (!isAdmin) {
    return (
      <div className="dashboard-access-denied">
        Access denied. Admins only.
      </div>
    );
  }

  return (
    <div ref={containerRef} className="dashboard-wrapper">
      <div ref={sidebarRef}>
        <SideBar />
      </div>
      <div ref={topbarRef}>
        <RightSidBar />
      </div>
      <div className="dashboard-main">
        {/* Stats Overview */}
        <div className="dashboard-stats-container">
          <div className="dashboard-stat-card">
            <h3>Total Messages</h3>
            <span ref={statsRef} className="dashboard-stat-number">0</span>
          </div>
          <div className="dashboard-stat-card">
            <h3>This Month</h3>
            <span className="dashboard-stat-number">{data.datasets[0].data[data.datasets[0].data.length - 1]}</span>
          </div>
        </div>

        <div ref={chartContainerRef} className="dashboard-chart-container">
          <Bar data={data} options={options} />
        </div>
        
        <div ref={messagesContainerRef} className="dashboard-messages-container">
          <h2 className="dashboard-messages-title">Contact Messages</h2>
          {loading ? (
            <div ref={loadingRef} className="dashboard-loading">
              <div className="loading-spinner"></div>
              <span>Loading messages...</span>
            </div>
          ) : error ? (
            <div className="dashboard-error">{error}</div>
          ) : messages.length === 0 ? (
            <div className="dashboard-empty">No messages found.</div>
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
                    <tr 
                      key={msg._id || idx} 
                      className="dashboard-table-row"
                      ref={(el) => {
                        if (el && !tableRowsRef.current.includes(el)) {
                          tableRowsRef.current[idx] = el;
                        }
                      }}
                    >
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
    </div>
  );
}
