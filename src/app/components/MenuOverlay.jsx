import React from 'react';
import NavLink from './NavLink';

function MenuOverlay({ links, isVisible, onLinkClick }) {
  return (
    <div
      className={`fixed inset-0 h-full bg-[#121212] bg-opacity-95 flex flex-col justify-center items-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <ul className="flex flex-col py-4 items-center space-y-4">
        {links.map((link, index) => (
          <li key={index} onClick={onLinkClick}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuOverlay;
