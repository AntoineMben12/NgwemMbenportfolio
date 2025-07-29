import Resume from "../components/resume";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import Testimony from "../components/testimony";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <RightSidBar />
      <SideBar />
      <div className="overflow-y-scroll overflow-x-hidden max-w-7xl">
        <div className="flex lg:justify-between justify-center overflow-y-scroll z-0 items-center h-screen bg-white ml-8 w-full">
        <div className="ml-5 mr-20 sm:mr-0 ">
          <h1 className="text-8xl sm:text-8xl text-gray-800 mt-25 sm:mt-0">
            Hi, i'm <span className="font-extrabold text-black">Mben</span>
          </h1>
          <p className="text-4xl text-gray-700">
            Glad to meet you and you are welcome to my World.
          </p>
          <p className="text-gray-600 text-wrap text-2xl mt-2.5">
            I'm a{" "}
            <span className="text-black font-extrabold">
              software developer
            </span>{" "}
            and <span className="text-black font-extrabold">designer</span> for
            more then 3+ years{" "}
          </p>
          <div className="flex sm:gap-8 sm:mt-5 flex-col">
            <button className="bg-black text-white py-3 px-8 rounded-lg shadow-lg cursor-pointer shadow-gray-500">
              Download Cv
            </button>
            <a href="/contact">
              <button className="border-black border w-full text-black py-3 class2 px-8 rounded-lg cursor-pointer shadow-lg shadow-gray-500 mt-2 sm:mt-0">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex lg:mr-40 h-70 w-70 lg:ml-10 bg-white class rounded-b-4xl border-4 shadow-lg shadow-gray-500 border-black rounded-t-4xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" 
              alt="Computer" 
              className="object-cover w-full h-full" 
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

