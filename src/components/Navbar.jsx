import React  ,{ useState,useEffect } from "react";
import {AiOutlineClose ,AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.png'
const Navbar = () =>{
    const [open , setOpen] =useState([false]);
    const [showBackground, setShowBackground] = useState(false);
    const TOP_OFFSET = 500;
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= TOP_OFFSET) {
            setShowBackground(true)
          } else {
            setShowBackground(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, []);
    

    return(
        <nav className={`flex fixed justify-between items-center h-20 w-full mx-auto px-12 text-white select-none ${showBackground ? "bg-black " : ""}`}>
            <div className='flex items-center'>
                <img src={Logo} alt="logo" className=" h-[60px] p-1"/>
                <h1 className='text-3xl font-bold text-white'>Slash</h1>
            </div>

            <ul className="hidden md:flex font-semibold">
                <li className="p-4"><a href="#services">服務</a></li>
                <li className="p-4"><a href="#about">了解Slash</a></li>
                <li className="p-4"><a href="#download">下載</a></li>
                <li className="p-4"><a href="#about-us">關於我們</a></li>
            </ul>

            <div onClick={() => setOpen(!open)} className="block md:hidden">
                {open ? <AiOutlineMenu size={25}/>:<AiOutlineClose size={25}/>}
            </div>
            <div className={!open ? `fixed left-0 top-16 w-{60%} m-4 ease-in-out duration-500 ${showBackground ? "bg-black " : ""}` : "fixed left-[-100%] "}>
                    <ul className="p-4">
                        <li className="p-4 border-b border-gray-400">服務</li>
                        <li className="p-4 border-b border-gray-400">了解Slash</li>
                        <li className="p-4 border-b border-gray-400">下載</li>
                        <li className="p-4 border-b border-gray-400">關於我們</li>
                    </ul>
            </div>            

        </nav>

    )
}
export default Navbar;