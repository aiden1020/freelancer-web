import React from "react";
import '../iphone.css'

const Iphone =()=>{
    return(
        <div class="iphone-x">
            <div class="side">
                <div class="screen">
                <video class="screen-content" src="https://images.apple.com/media/us/iphone-x/2017/01df5b43-28e4-4848-bf20-490c34a926a7/overview/primary/hero/small_2x.mp4" autoplay="autoplay" loop="loop"></video> 
                </div>
            </div>
            <div class="line"></div>
            <div class="header">
                <div class="sensor-1"></div>
                <div class="sensor-2"></div>
                <div class="sensor-3"></div>
            </div>
            <div class="volume-button"></div>
            <div class="power-button"></div>
        </div>
    )
}
export default Iphone;