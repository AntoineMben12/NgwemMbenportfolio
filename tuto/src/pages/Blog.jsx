import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";

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

  return(
    <>
    <SideBar/>
    <RightSidBar/>
    <div className="h-screen w-full bgimg flex justify-center items-center">
      <p className="text-8xl font-extrabold font-mono text-white">BLOG</p>
    </div>
    <div className="w-full min-h-screen bg-gray-50 py-10 flex flex-col lg:flex-row items-stretch">
      <div className="w-full lg:w-2/3 flex items-center">
        <div className="max-w-3xl mx-auto w-full px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Latest Posts</h2>
          <div className="space-y-6">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <h3 onClick={() => window.open(handleLink, "_blank")} className="cursor-pointer text-2xl font-semibold text-blue-700 mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-full lg:w-1/3 relative">
        <img 
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" 
          alt="Blog visual" 
          className="absolute right-0 top-0 h-full w-full object-cover rounded-l-lg"
          style={{ minHeight: '100%' }}
        />
      </div>
    </div>
    <Footer/>
    </>
  );
}
