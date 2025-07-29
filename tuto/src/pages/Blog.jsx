
import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import './Blog.css';

export default function Blog() {
  // Example blog posts
  const handleLink = "https://www.freecodecamp.org/";
  const posts = [
    {
      title: "Getting Started with React",
      date: "2025-07-01",
      excerpt: "Learn the basics of React and how to build your first component.",
    },
    {
      title: "Understanding Tailwind CSS",
      date: "2025-06-20",
      excerpt: "A quick guide to using Tailwind CSS for rapid UI development.",
    },
    {
      title: "JavaScript ES2025 Features",
      date: "2025-06-10",
      excerpt: "Explore the latest features introduced in ES2025.",
    },
  ];

  return (
    <>
      <SideBar />
      <RightSidBar />
      <div className="blog-header">
        <p className="blog-header-title">BLOG</p>
      </div>
      <div className="blog-main">
        <div className="blog-posts">
          <div className="posts-container">
            <h2 className="posts-title">Latest Posts</h2>
            <div className="posts-list">
              {posts.map((post, idx) => (
                <div key={idx} className="post-card">
                  <button className="post-title" onClick={() => window.open(handleLink, "_blank")}>{post.title}</button>
                  <p className="post-date">{post.date}</p>
                  <p className="post-excerpt">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="blog-image-container">
          <img 
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" 
            alt="Blog visual" 
            className="blog-image"
            style={{ minHeight: '100%' }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
