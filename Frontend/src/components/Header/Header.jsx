import { useState, useEffect } from "react"
import Navbar from "./Navbar";
export default function Header(){

    const [isOpen,setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflowY = "hidden"; // Disable scrolling
        } else {
          document.body.style.overflowY = "auto"; // Enable scrolling
        }
    
        return () => {
          document.body.style.overflowY = "auto"; // Cleanup on unmount
        };
      }, [isOpen]);
    

    return (
        <header className="w-full">
        <div className="flex px-6 relative items-center w-full py-4 md:px-12 justify-between">
            {/* Logo */}
            <div className="flex text-xl font-bold text-secondary">
               Roomify
            </div>

            {/* Desktop Nav */}
            <nav id="navbar" className="hidden p-4 justify-between md:flex relative">    
                
                {/* Navigation Links*/}
                <ul className="flex items-center gap-6 text-primary text-base">
                    <li>
                    <a href="#" className="hover:text-secondary">
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-secondary">
                        Timetable
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-secondary">
                        Announcements
                    </a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-secondary">
                        Contact
                    </a>
                    </li>
                </ul>
            </nav>

            <div className="hidden md:flex items-center">
                <button className="border-1 border-secondary  px-6 py-2.5 rounded-md cursor-pointer">
                    Login
                </button>
                <button className="bg-secondary  hover:bg-tertiary cursor-pointer text-white px-6 py-3 rounded-md ml-4">
                    Sign Up
                </button>
            </div>

            {/* Toggle Nav Btn */}
            <button className="block md:hidden z-99 cursor-pointer " id="toggle" onClick={() => setIsOpen(!isOpen)}> 
                <img src={isOpen? "../src/assets/close.svg" : "../src/assets/menu.svg"} alt="" className="h-12"/>
            </button>

            {/* Mobile Nav */}
            <Navbar isOpen={isOpen} />

        </div>
        </header>
    );
}