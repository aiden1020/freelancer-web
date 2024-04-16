import React from "react";
import Logo from "../assets/logo.png"
const About =()=>{
    return(
        <div id="about" className=" h-full w-full bg-gray-200">
            <div className="flex h-full justify-center items-center grid-cols-2 gap-[100px] ">
                <div className="w-[500px]">歡迎來到 <b>Slash</b> — 專為自由工作者和專案發案者打造的革新性配對平台。在這裡，我們結合了交友軟體的直覺式配對機制，為您帶來一個獨特且高效的工作匹配體驗。</div>
                <img src={Logo} alt="Logo" className=" h-[400px] drop-shadow-2xl"></img>
            </div>
        </div>
    )
}
export default About