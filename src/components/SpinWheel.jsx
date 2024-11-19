import { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import Confetti from 'react-confetti';
import { useDiscount } from '../context/DiscountContext';

const SpinWheel = () => {
  const { applyDiscount } = useDiscount();
  const [showModal, setShowModal] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const data = [
    { option: '10% OFF', style: { backgroundColor: '#EF4444', textColor: 'white' } },
    { option: '20% OFF', style: { backgroundColor: '#F59E0B', textColor: 'white' } },
    { option: '35% OFF', style: { backgroundColor: '#10B981', textColor: 'white' } },
    { option: '75% OFF', style: { backgroundColor: '#3B82F6', textColor: 'white' } },
    { option: '90% OFF', style: { backgroundColor: '#8B5CF6', textColor: 'white' } },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const allowedPrizeIndices = [0, 1, 2];
      const randomIndex = Math.floor(Math.random() * allowedPrizeIndices.length);
      const newPrizeNumber = allowedPrizeIndices[randomIndex];
      
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setShowConfetti(true);
    setShowCongrats(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const handleClaimNow = () => {
    const discountText = data[prizeNumber].option;
    applyDiscount(discountText);
    setShowModal(false);
    setShowCongrats(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      {showCongrats ? (
        <div className="relative bg-white rounded-2xl p-8  max-w-xl w-full  mx-4 shadow-2xl transform transition-all animate-fade-in">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block p-3 rounded-full bg-green-100">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Congratulations! 🎉</h2>
            <p className="text-xl text-gray-600 mb-2">You've won</p>
            <p className="text-4xl font-bold text-green-600 mb-6">{data[prizeNumber].option}</p>
            <p className="text-gray-500 mb-8">Use this amazing discount on your next purchase!</p>
            
            <button
              onClick={handleClaimNow}
              className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transform transition-all hover:scale-105 shadow-lg"
            >
              CLAIM NOW
            </button>
          </div>
        </div>
      ) : (
        <div className="relative bg-white rounded-lg p-8 max-w-xl w-full mx-4">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Spin & Win!</h2>
            <p className="text-gray-600">Try your luck to win amazing discounts</p>
          </div>

          <div className="flex flex-col  items-center">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={handleStopSpinning}
              backgroundColors={['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6']}
              textColors={['white']}
              outerBorderColor="#000000"
              radiusLineColor="#000000"
              radiusLineWidth={1}
              fontSize={16}
            />
            <button
              onClick={handleSpinClick}
              disabled={mustSpin}
              className="mt-6 text-xl font-medium px-6  py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 transform transition-all hover:scale-105"
            >
              SPIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
