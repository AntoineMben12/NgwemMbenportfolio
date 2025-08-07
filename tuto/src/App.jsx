import { Routes,Route } from "react-router-dom";
import Index from "./pages";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import SignUp from "./pages/signup";



export default function App() {
    
    return(
        <>
           <div>
             <Routes>
                <Route path="/" element={<Index/>} />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
           </div>
        </>
    );
}