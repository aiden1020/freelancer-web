import React  ,{ useState } from "react";
import {AiOutlineClose ,AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.png'
const Navbar = () =>{
    const [open , setOpen] =useState([false]);
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white select-none'>
        <div className='flex items-center'>
            <img src={Logo} alt="logo" className=" h-[60px] p-1"/>
            <h1 className='text-3xl font-bold text-white'>Slash</h1>
        </div>

            <ul className="hidden md:flex font-semibold">
                <li className="p-4 ">服務</li>
                <li className="p-4">了解Slash</li>
                <li className="p-4">下載</li>
                <li className="p-4">關於我們</li>
            </ul>
            <div onClick={() => setOpen(!open)} className="block md:hidden">
                {open ? <AiOutlineMenu size={25}/>:<AiOutlineClose size={25}/>}
            </div>
            <div className={!open ? "fixed left-0 top-24 w-{60%} m-4 ease-in-out duration-500" : "fixed left-[-100%]"}>
                    <ul className="p-4">
                        <li className="p-4 border-b border-gray-400">服務</li>
                        <li className="p-4 border-b border-gray-400">了解Slash</li>
                        <li className="p-4 border-b border-gray-400">下載</li>
                        <li className="p-4 border-b border-gray-400">關於我們</li>
                    </ul>
            </div>            

        </div>

    )
}
export default Navbar;