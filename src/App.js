import React from "react"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background_Video from "./assets/bg_video.mp4"
import Sevice from "./components/Sevice";
function App() {
  return (
      <div className="main ">
        {/* black mask for background video */}
        <div className=" top-0 h-[100%] w-[100%] absolute bg-black opacity-40"/>
        <video src={Background_Video} autoPlay loop muted className=" h-[100%] w-[100%] object-cover"/>
        <div className=" absolute h-[100%] w-[100%] top-0">

          <Navbar />
          <Hero />
          <Sevice/>
        </div>
      </div>

  );
}

export default App;
