import { useEffect } from 'react';
// import Gift from './components/Gift';
import Home from './components/Home';
import ScrollReveal from 'scrollreveal';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    // Initialize ScrollReveal
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
    <div className="font-body ">
      <Navbar />
      <main className="overflow-hidden lg:px-32">
        <Home />
       
      </main>
      
    </div>
  );
}

export default App;