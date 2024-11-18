import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });

    // Home section
    sr.reveal('.home__data');
    sr.reveal('.home__img', { delay: 700 });

    // Giving section
    sr.reveal('.giving__container');
    sr.reveal('.giving__content', { interval: 100 });

    // Celebrate section
    sr.reveal('.celebrate__data');
    sr.reveal('.celebrate__img', { origin: 'right' });

    // Message section
    sr.reveal('.message__form');
    sr.reveal('.message__img', { origin: 'left' });

    // Footer
    sr.reveal('.footer__container');
    sr.reveal('.footer__img1', { origin: 'left' });
    sr.reveal('.footer__img2', { origin: 'right' });

    return () => sr.destroy();
  }, []);
};

export default useScrollReveal;