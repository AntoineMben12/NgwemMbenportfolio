import './SideBar.css';

export default function SideBar() {
  return (
    <>
      <div className="sidebar-container">
        <a className="sidebar-link" href="/home"><i className="fa-solid fa-house sidebar-icon"></i></a>
        <a className="sidebar-link" href="/about"><i className="fa-solid fa-user sidebar-icon"></i></a>
        <a className="sidebar-link" href="/contact"><i className="fa-solid fa-envelope sidebar-icon"></i></a>
        <a className="sidebar-link" href="/blog"><i className="fa-solid fa-blog sidebar-icon"></i></a>
        <a className="sidebar-link" href="/dashboard"><i className="fa-solid fa-comments sidebar-icon"></i></a>
        <a className="sidebar-link" href="/portfolio"><i className="fa-solid fa-briefcase sidebar-icon"></i></a>
      </div>
    </>
  );
}

