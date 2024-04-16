import React from "react";
import {AppleDLButton,GooglePlayDLButton} from "./DL_Button.jsx"
const Hero =()=>{
return (
    <div id='home' class="flex h-full justify-center items-center text-white ">
        <div class="w-max h-24  text-center">
            <h1 class="hero_title text-8xl p-4">Slash</h1>
            <h2 className=" text-5xl font-bold p-2">全新自由工作配對平台</h2>
            <div className="flex justify-center p-2">
                <AppleDLButton />
                {/* space for two buttons */}
                <div className=" m-3"/>
                <GooglePlayDLButton/>
            </div>
            
       </div>
    </div>
)
}
export default Hero