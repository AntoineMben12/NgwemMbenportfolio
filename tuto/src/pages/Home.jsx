import Resume from "../components/resume";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import Testimony from "../components/testimony";
import Footer from "../components/footer";
import './Home.css';

export default function Home() {
  return (
    <>
      <RightSidBar />
      <SideBar />
      <div className="home-main">
        <div className="home-content">
          <div className="home-title-container">
            <h1 className="home-title">
              Hi, i'm <span className="home-desc-bold">Mben</span>
            </h1>
            <p className="home-subtitle">
              Glad to meet you and you are welcome to my World.
            </p>
            <p className="home-desc">
              I'm a{" "}
              <span className="home-desc-bold">
                software developer
              </span>{" "}
              and <span className="home-desc-bold">designer</span> for
              more then 3+ years{" "}
            </p>
            <div className="home-btn-group">
              <button className="home-btn-primary">
                Download Cv
              </button>
              <a href="/contact">
                <button className="home-btn-secondary">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
          <div>
            <div className="home-image-container">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" 
                alt="Computer" 
                className="home-image" 
              />
            </div>
          </div>
        </div>
        <div>
          <Resume/>
          <Testimony/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

