import React, { useState } from 'react'; 
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 px-6 relative'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />

      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : ""}>
          <li className='py-1 cursor-pointer'>HOME</li>
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : ""}>
          <li className='py-1 cursor-pointer'>ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : ""}>
          <li className='py-1 cursor-pointer'>ABOUT</li>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : ""}>
          <li className='py-1 cursor-pointer'>CONTACT</li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded-lg flex flex-col gap-2 p-4 shadow-md'>
                <p onClick={() => navigate('my-profile')} className='py-2 hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='py-2 hover:text-black cursor-pointer'>My Appointment</p>
                <p onClick={() => setToken(false)} className='py-2 hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : 
          <button
            onClick={() => navigate('/login')}
            className='px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-opacity-90 transition'>
            Create Account
          </button>
        }
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
      </div>

      {/*----Mobile menu */}
      <div className={`${showMenu ? 'fixed w-full h-full' : 'hidden'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}> 
        <div className='flex item-center justify-between px-5 py-6'>
          <img className='w-36' src={assets.logo} alt=""  />
          <img className='w-7'  onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
        </div>
        <ul className='flex flex-col item-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink  to="/" onClick={() => setShowMenu(false)}> <p className=' px-4 py-2 rounded inline-block'>HOME</p> </NavLink>
          <NavLink  to="/doctors" onClick={() => setShowMenu(false)}> <p className=' px-4 py-2 rounded inline-block'>ALL DOCTORS</p> </NavLink>
          <NavLink  to="/about" onClick={() => setShowMenu(false)}> <p className=' px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
          <NavLink  to="/contact" onClick={() => setShowMenu(false)}> <p className=' px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
