import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";

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
      <div className="min-h-screen w-full bg-gray-50 py-12 px-4">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">My Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h2>
                <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition font-semibold text-center"
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
