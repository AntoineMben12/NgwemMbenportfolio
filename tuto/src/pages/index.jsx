import './index.css';

export default function Index() {
  return (
    <>
      <div className="index-container">
        <div className="index-title">{"</Mben>"}</div>
        <div className="index-content">
          <p className="index-greeting">
            Hi, dear user
          </p>
          <p className="index-subtitle">
            You are welcome to Mben's portfolio
          </p>
          <p className="index-desc">
            Welcome once more and thanks for visiting i'm{" "}
            <span className="index-desc-name">MBEN ANTOINE</span> software
            developer <span className="index-desc-and">&</span> Designer.
          </p>
          <a href="/home">
            <button className="index-btn-primary">
              Start
            </button>
          </a>
          <a href="/contact">
            <button className="index-btn-secondary">
              Contact
            </button>
          </a>
        </div>
      </div>
      <div className="index-footer">
        <div className="index-footer-icons">
          <a href=""><i>f</i></a>
          <a href=""><i>in</i></a>
          <a href=""><i>i</i></a>
          <a href=""><i>e</i></a>
        </div>
        <div className="index-footer-text">
          All right has been <span className="index-footer-reserved">reserved</span>!
        </div>
      </div>
    </>
  );
}

