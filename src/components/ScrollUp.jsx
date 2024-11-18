import { useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#" 
      className={`scrollup fixed right-4 lg:right-12 bottom-[-30%] bg-white dark:bg-gray-800 shadow-md p-1.5 rounded transition-all duration-400 opacity-80 hover:opacity-100 z-10 ${showScroll ? 'bottom-12' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <BsArrowUpShort className="text-xl text-primary" />
    </a>
  );
};

export default ScrollUp;