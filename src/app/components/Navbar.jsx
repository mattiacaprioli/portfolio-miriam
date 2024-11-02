'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import MenuOverlay from './MenuOverlay';

const navLinks = [
  { title: 'Chi sono', path: '#about' },
  { title: 'Esperienza', path: '#experience' },
  { title: 'Progetti', path: '#projects' },
  { title: 'Contatti', path: '#contact' }
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href="/" className='text-2xl md:text-5xl text-white font-semibold'>
          {/* Logo */}
        </Link>
        <div className='mobile-menu block md:hidden'>
          <button 
            onClick={() => setNavbarOpen(!navbarOpen)} 
            className='flex items-center px-3 py-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-transform duration-300'
          >
            {navbarOpen ? (
              <IoMdClose className='h-5 w-5 animate-icon-close z-10' />
            ) : (
              <RxHamburgerMenu className='h-5 w-5 animate-icon-open' />
            )}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <MenuOverlay links={navLinks} isVisible={navbarOpen} onLinkClick={handleLinkClick} />
    </nav>
  );
}

export default Navbar;

