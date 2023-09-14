import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {  

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    
    return (
        <div className="flex justify-between max-width-[1240px] px-4 mx-auto items-center h-24 text-white">
            {/* <ul className="flex">
                <li className="p-4">Home</li>
                <li className="p-4">Companies</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul> */}
    
            <div onClick={handleNav} className="flex ml-auto">
                {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-[#000300]' : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT</h1>
                <ul className="pt-12 p-4 uppercase">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Companies</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;