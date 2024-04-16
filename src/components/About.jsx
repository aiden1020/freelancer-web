import React from "react";
import Logo from "../assets/logo.png"
const About =()=>{
    return(
        <div id="about" className="  w-full bg-gray-200 lg:h-full xl:h-full md:h-full h-[300px]">
            <div className="flex  h-full justify-center items-center grid-cols-2 gap-16 px-5 ">
                <div className="w-[500px]">歡迎來到 <b>Slash</b> — 專為自由工作者和專案發案者打造的革新性配對平台。在這裡，我們結合了交友軟體的直覺式配對機制，為您帶來一個獨特且高效的工作匹配體驗。</div>
                <img src={Logo} alt="Logo" className="lg:h-[350px] xl:h-[400px] md:h-[250px] hidden md:block drop-shadow-2xl"/>
            </div>
        </div>
    )
}
export default About