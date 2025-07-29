import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import './Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      title: "React Weather App",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      description: "A weather forecast app built with React and OpenWeatherMap API.",
      github: "https://github.com/antoinemben12/"
    },
    {
      title: "Portfolio Website",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      description: "A personal portfolio website to showcase my projects and skills.",
      github: "https://github.com/antoinemben12/"
    },
    {
      title: "Node.js REST API",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      description: "A RESTful API built with Node.js and Express for managing tasks.",
      github: "https://github.com/antoinemben12/"
    },
  ];

  return(
    <>
      <RightSidBar/>
      <SideBar/>
      <div className="portfolio-main">
        <h1 className="portfolio-title">My Projects</h1>
        <div className="portfolio-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="portfolio-card">
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-card-content">
                <h2 className="portfolio-card-title">{project.title}</h2>
                <p className="portfolio-card-desc">{project.description}</p>
                <a
                  className="portfolio-card-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
