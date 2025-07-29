export default function SideBar() {
  return (
    <>
      <div className="fixed w-10 bg-gray-950 h-screen flex flex-col items-center justify-center p-2 z-20">
        <a className="text-2xl flex justify-center items-center text-center" href="/home"><i className="fa-solid fa-house flex justify-center items-center hover:bg-gray-500 mt-4 mb-4 h-8 w-8 rounded-full bg-white flex justify-center items-center"></i></a>
        <a className="text-2xl flex justify-center items-center text-center" href="/about"><i className="fa-solid fa-user hover:bg-gray-500 mt-4 mb-4 h-8 w-8 rounded-full bg-white flex justify-center items-center"></i></a>
        <a className="text-2xl flex justify-center items-center text-center" href="/contact"><i className="fa-solid fa-envelope hover:bg-gray-500 mt-4 mb-4 h-8 w-8 rounded-full bg-white flex justify-center items-center"></i></a>
        <a className="text-2xl flex justify-center items-center text-center" href="/blog"><i className="fa-solid fa-blog hover:bg-gray-500 mt-4 mb-4 h-8 w-8 rounded-full bg-white flex justify-center items-center"></i></a>
        <a className="text-2xl flex justify-center items-center text-center" href="/dashboard"><i className="fa-solid fa-comments hover:bg-gray-500 mt-4 mb-4 h-8 w-8 rounded-full bg-white flex justify-center items-center"></i></a>
        <a className="text-2xl flex justify-center items-center text-center" href="/portfolio"><i className="fa-solid fa-briefcase hover:bg-gray-500 mt-4 mb-4 h-8 w-8 rounded-full bg-white flex justify-center items-center"></i></a>
      </div>
    </>
  );
}

