import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarMenu from './NavbarMenu';
import { IoCloseSharp } from 'react-icons/io5';

function Navbar() {
    const [isShowBurger, setIsShowBurger] = useState(true);

    return (
      <>
        <div className="max-lg:hidden z-10 w-1/5 h-full bg-pink-800 bg-opacity-95 fixed ml-20 text-white">
            <NavbarMenu />
        </div>

        {/* mobile */}
        <div className={`z-10 lg:hidden w-14 h-14 bg-white flex justify-center items-center fixed text-pink-900 ${isShowBurger ? '' : 'hidden'}`} 
            onClick={()=> setIsShowBurger(false)}>
            <GiHamburgerMenu className='text-2xl'/>
        </div>
        <div className={`z-10 transition-all duration-500 ${
            isShowBurger ? 'opacity-0 -translate-x-full invisible'
            : 'opacity-100 -translate-x-0 visible'
            } w-1/4 h-full bg-pink-800 bg-opacity-95 fixed text-white`}>
            <div className='w-full h-14 bg-white text-pink-950 flex justify-center items-center mx-auto'>
                <IoCloseSharp className='text-xl font-extrabold'
                onClick={() => setIsShowBurger(true)}/>
            </div>
            <NavbarMenu />
        </div>
      </>
    )
  }
  
  export default Navbar;
  