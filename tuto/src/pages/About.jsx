
import AboutHero from "../components/aboutHero";
import Education from "../components/education";
import Skills from "../components/skills";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import Footer from "../components/footer";
import './About.css';

export default function About() {
  return (
    <>
      <SideBar />
      <RightSidBar />
      <AboutHero />
      <Education />
      <Skills />
      <div className="about-container">
        <section className="about-info-section">
          <div className="about-info">
            <h2 className="about-info-title">Info</h2>
            <ul className="about-info-list">
              <li><span style={{marginRight: '0.5rem', color: '#2563eb'}}><i className="fa-solid fa-user"></i></span><strong>Name:</strong> Ngwem mben antoine</li>
              <li><span style={{marginRight: '0.5rem', color: '#2563eb'}}><i className="fa-solid fa-phone"></i></span><strong>Phone:</strong> (237) 688-495-234</li>
              <li><span style={{marginRight: '0.5rem', color: '#2563eb'}}><i className="fa-solid fa-envelope"></i></span><strong>Email:</strong> ngwemmben@gmail.com</li>
            </ul>
          </div>
          <div className="about-map-container">
            <iframe
              src="https://maps.app.goo.gl/Yxi6E1gpuQZLJhC9A"
              title="Info Frame"
              height="180"
              style={{ border: "none", borderRadius: "16px", width: "100%", maxWidth: "400px", boxShadow: "0 4px 16px rgba(59,130,246,0.10)" }}
              className="about-map"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
