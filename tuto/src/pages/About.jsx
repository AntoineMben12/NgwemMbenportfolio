import AboutHero from "../components/aboutHero";
import Education from "../components/education";
import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import Skills from "../components/skills";
import RightSidBar from "../components/TopBar";

export default function About() {
  return(
    <>
      <SideBar/>
      <RightSidBar/>
      <AboutHero/>
      <Education/>
      <Skills/>
      <div className="lg:flex lg:flex-col max-w-7xl mx-auto p-6 h-[60vh] w-[100%] flex justify-center items-center">
        <section style={{gap: "2rem" }}>
          <div>
            <h2>Info</h2>
            <p><strong>Name:</strong> Ngwem mben antoine</p>
            <p><strong>Phone:</strong> (237) 688-495-234</p>
            <p><strong>Email:</strong> ngwemmben@gmail.com</p>
          </div>
          <iframe
            src="https://maps.app.goo.gl/Yxi6E1gpuQZLJhC9A"
            title="Info Frame"
            
            height="150"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            className="w-[250px] lg:[600px]"
          ></iframe>
        </section>
      </div>
      <Footer/>
    </>
  );
}
