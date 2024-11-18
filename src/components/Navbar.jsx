import { useState, useEffect } from 'react';
import { BiMoon, BiSun, BiGridAlt, BiX } from 'react-icons/bi';
import logo from '../img/logo.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeader(window.scrollY >= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  const handleLinkClick = (item) => {
    setActiveLink(item);
    setShowMenu(false); // Close menu when link is clicked
  };

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-bodyColor dark:bg-gray-900 transition-all duration-300 ${scrollHeader ? 'shadow-md' : ''}`}>
      <nav className="h-14 md:h-20 container mx-auto px-4 md:px-6 lg:px-32 flex justify-between items-center relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 font-medium text-titleColor dark:text-white">
          <img src={logo} alt="" className="w-6" />
          Divine Delight's
        </a>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setDarkTheme(!darkTheme)} 
            className="text-xl text-titleColor dark:text-white"
          >
            {darkTheme ? <BiSun /> : <BiMoon />}
          </button>
          <button 
            onClick={() => setShowMenu(true)} 
            className="text-xl text-titleColor dark:text-white"
          >
            <BiGridAlt />
          </button>
        </div>

        {/* Navigation Menu */}
        <div className={`fixed md:static top-0 ${showMenu ? 'right-0' : '-right-full'} w-full md:w-auto h-screen md:h-auto bg-bodyColor dark:bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out flex flex-col md:flex-row items-center justify-center md:justify-end gap-8`}>
          {/* Close button for mobile */}
          <button 
            className="absolute top-4 right-4 text-2xl text-titleColor dark:text-white md:hidden"
            onClick={() => setShowMenu(false)}
          >
            <BiX />
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row items-center gap-8 mb-8 md:mb-0">
            {['Home', 'Celebrate', 'Gifts', 'New'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => handleLinkClick(item.toLowerCase())}
                  className={`${activeLink === item.toLowerCase() ? 'text-primary' : 'text-titleColor dark:text-white'} hover:text-primary transition-colors text-lg md:text-base`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark mode toggle for desktop */}
          <button 
            onClick={() => setDarkTheme(!darkTheme)} 
            className="hidden md:block text-xl text-titleColor dark:text-white"
          >
            {darkTheme ? <BiSun /> : <BiMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;