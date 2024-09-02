import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { CiMenuBurger } from 'react-icons/ci'

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        setNav(!nav)
     }

    return <>
        <div className=" w-full h-[90px] fixed backdrop-blur-sm  ">
            <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center   h-full">
                <div className=" ">
                    <h1 className=' text-[#00d8ff]'>DEFI</h1>
                </div>
                <div className=" hidden md:flex">
                    <ul className=' text-white justify-between flex items-center'>
                        <li>Platform</li>
                        <li>Developer </li>
                        <li>Community </li>
                        <li>About </li>
                         <button className='button ml-4'>Use Defi</button>

                    </ul>
                   
                </div>
                {/* Hamburger Menu */}
                <div onClick={changeBackground} className=" block  md:hidden">
                    {nav ? <AiOutlineClose size={30} className=' text-white' />: <CiMenuBurger size={30} className=' text-white' />   }

                   
                </div>
                {/* Mobile Menu */}
                <div className={nav ? " md:hidden  text-white justify-center flex  bg-black/95   w-full absolute text-center   top-[90px] left-0 " :" absolute left-[-100%]"}>
                    <ul className=' '>
                        <li className=' text-2xl'>Platform</li>
                        <li className=' text-2xl'>Developer </li>
                        <li className=' text-2xl'>Community </li>
                        <li className=' text-2xl'>About </li>
                        <button className='button m-8'>Use Defi</button>

                    </ul>

                </div>
            </div>
    </div>
    
    
    
    </>
}

