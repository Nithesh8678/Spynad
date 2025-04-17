import React, { useState, useEffect } from 'react';
import SpynadBT from '../assets/SPYNAD-B-Trans.png';
import SpynadWT from '../assets/SPYNAD-W-Trans.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isInAbout, setIsInAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const headerSection = document.getElementById('Header');
      const aboutSection = document.getElementById('About');

      const scrollY = window.scrollY;
      const threshold = 100;
      const progress = Math.min(scrollY / threshold, 1);
      setScrollProgress(progress);
      setIsScrolled(progress > 0.5);

      if (headerSection && aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const headerBottom = headerSection.getBoundingClientRect().bottom;
        setIsInAbout(aboutTop <= 0 && headerBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (item) => {
    if (item === 'Projects' || item === 'Contact') {
      navigate(`/${item.toLowerCase()}`);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          if (item === 'Home') {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          } else {
            const element = document.getElementById(item);
            if (element) {
              const navbarHeight = 80;
              const offsetPosition = element.offsetTop - navbarHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }
        }, 100);
      } else {
        if (item === 'Home') {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        } else {
          const element = document.getElementById(item);
          if (element) {
            const navbarHeight = 80;
            const offsetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }
      }
    }
    setShowMobileMenu(false);
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        transform-gpu will-change-transform
        ${isInAbout ? 'text-white' : 'text-black'} 
      `}
      style={{
        height: `${Math.max(64, 80 - scrollProgress * 16)}px`,
        width: isScrolled ? '90%' : '100%',
        maxWidth: '2000px',
        margin: '0 auto',
        marginTop: `${scrollProgress * 16}px`,
        borderRadius: `${scrollProgress * 50}px`,
        transform: `scale(${1 - scrollProgress * 0.02})`,
        opacity: 1 - (scrollProgress * 0.2),
        transformOrigin: 'top',
        backdropFilter: 'blur(8px)',
        backgroundColor: isInAbout 
          ? `rgba(0, 0, 0, ${0.8 + scrollProgress * 0.2})` 
          : `rgba(255, 255, 255, ${0.8 + scrollProgress * 0.2})`,
        boxShadow: `0 ${scrollProgress * 8}px ${scrollProgress * 12}px rgba(0,0,0,${0.1 + scrollProgress * 0.1})`
      }}
    >
      <div className={`
        h-full flex items-center justify-between
        transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        px-6 md:px-12 container mx-auto
      `}>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('Home');
          }}
          className="text-2xl font-bold"
        >
          <img 
            src={isInAbout ? SpynadWT : SpynadBT} 
            alt="Logo" 
            style={{
              height: `${Math.max(56, 150 - scrollProgress * 32)}px`,
              transform: `scale(${1 - scrollProgress * 0.1})`,
              transition: 'all 700ms cubic-bezier(0.34, 1.56, 0.64, 1)',
              marginLeft: '-8px',
              marginRight: '-8px'
            }}
            className="transform-gpu will-change-transform object-contain"
          />
        </a>

        <ul className={`
          hidden md:flex flex-1 justify-center -ml-20 space-x-10 text-lg font-medium 
          transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${isInAbout ? 'text-white' : 'text-black'}
        `}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              {item === 'Projects' || item === 'Contact' ? (
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="relative overflow-hidden group"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <span className="transition-all duration-500 ease-out inline-block hover:translate-y-[-2px]">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              ) : (
                <button
                  onClick={() => handleNavigation(item)}
                  className="relative overflow-hidden group cursor-pointer"
                >
                  <span className="transition-all duration-500 ease-out inline-block hover:translate-y-[-2px]">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </button>
              )}
            </li>
          ))}
        </ul>

        <button 
          onClick={() => setShowMobileMenu(true)} 
          className={`
            md:hidden text-2xl 
            transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${isInAbout ? 'text-white' : 'text-black'}
          `}
        >
          ☰
        </button>
      </div>

      {/* Mobile--Menu */}
      <div className={`
        fixed inset-0 bg-white transform 
        ${showMobileMenu ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300 ease-in-out md:hidden z-50
      `}>
        <div className="flex justify-end p-6">
          <button onClick={() => setShowMobileMenu(false)} className="text-black text-2xl">✖</button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10 text-black text-xl">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              {item === 'Projects' || item === 'Contact' ? (
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setShowMobileMenu(false)}
                  className="relative overflow-hidden group"
                >
                  <span className="transition-all duration-500 ease-out inline-block hover:translate-y-[-2px]">
                    {item}
                  </span>
                </Link>
              ) : (
                <button
                  onClick={() => handleNavigation(item)}
                  className="relative overflow-hidden group cursor-pointer"
                >
                  <span className="transition-all duration-500 ease-out inline-block hover:translate-y-[-2px]">
                    {item}
                  </span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;