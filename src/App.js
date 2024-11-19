import { useEffect } from 'react';
import Home from './components/Home';
import ScrollReveal from 'scrollreveal';
import Navbar from './components/Navbar';
import SpinWheel from './components/SpinWheel';
import { DiscountProvider } from './context/DiscountContext';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });

    sr.reveal(`.home__data, .giving__container, .celebrate__data, .message__form`);
    sr.reveal(`.home__img`, { delay: 700 });
    sr.reveal(`.giving__content`, { interval: 100 });
    sr.reveal(`.celebrate__img`, { origin: 'right' });
    sr.reveal(`.message__img`, { origin: 'left' });

    return () => sr.destroy();
  }, []);

  return (
    <DiscountProvider>
      <div className="font-body">
        <Navbar />
        <SpinWheel />
        <main className="overflow-hidden lg:px-32">
          <Home />
        </main>
      </div>
    </DiscountProvider>
  );
}

export default App;