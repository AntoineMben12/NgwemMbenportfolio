import './resume.css';

export default function Resume() {
  return (
    <>
      <div className="resume-container">
        <h1 className="resume-title">_-Resume-_</h1>
        <article className="resume-intro">
          I'm named{" "}
          <span className="resume-name">NGWEM MBEN ANTOINE DE PADOUE </span>
          ,i'm a young student in the field to software engineering .
          <p>
            i'm a passionate of the tech industry and during my journey i worked
            on many projects for more than 3+ years.
          </p>
          <p>
            I'm also a student in level II at the{" "}
            <span className="resume-school">
              AFRICAN INSTITUTE OF COMPUTER SCIENCE{" "}
            </span>
            in the software engineering departement.
          </p>
          <p>Here is resume of my journey</p>
        </article>
        <div className="resume-grid">
          <div className="resume-row resume-row-1">
            {/* <img src="" alt="" /> */}
            <div className="resume-img-container">
              <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" alt="" className="resume-img"/>
            </div>
            <article className="resume-details">
              <p>For my education i'm did my primary eduction and secondary study at <br /><span className="resume-school">LA FIERTE CSBM</span>& <span className="resume-school">ALL NATIONS SCHOOL</span></p>
              <p>Obtain my <a href="" className="resume-link">GCE ORDINARY LEVEL</a> in 2022 with a pass in 11 subject on 11 possible</p>
              <p>And <a href="" className="resume-link">ADVANCE LEVEL</a> in 2024.</p>
              <p>And presently studing at <a href="" className="resume-link">AICS CAMEROON</a>.</p>
            </article>
          </div>
          {/* ----------------------------- */}
          <div className="resume-row resume-row-2">
            {/* <img src="" alt="" /> */}
            <article className="resume-details">
              <p>For professional i'm freelance since<br /><span className="resume-year">2022</span>.</p>
              <p>I did intentship at <a href="" className="resume-link">COMPOSt</a> in 2024.</p>
              <p><a href=""><button className="resume-btn">Github</button></a></p>
            </article>
            <div className="resume-img-container">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Company" className="resume-img"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

