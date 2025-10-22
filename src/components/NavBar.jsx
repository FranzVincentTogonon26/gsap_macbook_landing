import React, { useState } from 'react';
import { navLinks } from "../constants"
import clsx from 'clsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>  
    <nav role="navigation" aria-label="Main navigation">
      <img src="/logo.svg" alt="Apple Logo" />
      {/* Desktop Menu */}
      <ul>
        {navLinks.map(({label}) => (
          <li key={label}>
            <a href="{label}" >{label}</a>
          </li>
        ))}
      </ul>
      <div>
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
          <div className="md:hidden">
            <button
            className='mt-0.5 z-100'
              onClick={toggleMenu} 
            >
              <div className={clsx( 'toggle-menu', isMenuOpen ? 'rotate-43 -translate-x-2 translate-y-1 ' : 'top-2 left-1/2 -translate-x-1/2' )}></div>
              <div className={clsx( 'toggle-menu', isMenuOpen ? '-rotate-43 -translate-x-2 -translate-y-0.5' : 'top-5 left-1/2 -translate-x-1/2' )}></div>
            </button>
          </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={clsx( 'toggle-content', isMenuOpen ? 'opacity-89 visible h-full' : 'opacity-0 invisible h-0' ) }
      >
      <ul className='list-content'>
        {navLinks.map((item, index) => (
          <li>
          <a
            key={item.label}
            href={item.label}
            className={clsx( 'drop-content ', isMenuOpen ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-0' ) }
            style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
          >
            <h3>{item.label}</h3>
          </a>
          </li>
        ))}
      </ul>
      </div>
     












    </nav>
    </header>
  );
};

export default Navbar;
