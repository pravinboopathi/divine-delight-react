import { createContext, useContext, useState } from 'react';

const DiscountContext = createContext();

export const DiscountProvider = ({ children }) => {
  const [activeDiscount, setActiveDiscount] = useState(0);
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);

  const applyDiscount = (discountText) => {
    const discountPercent = parseInt(discountText);
    setActiveDiscount(discountPercent);
    setShowDiscountPopup(true);
    
    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowDiscountPopup(false);
    }, 3000);
  };

  const calculateDiscountedPrice = (price) => {
    if (!activeDiscount) return price;
    
    // Ensure we're working with a number
    const numericPrice = typeof price === 'string' ? 
      parseFloat(price.replace(/[₹$]/g, '')) : price;
    
    const discountAmount = Math.round((numericPrice * activeDiscount) / 100);
    const discountedPrice = numericPrice - discountAmount;
    
    return Math.round(discountedPrice);
  };

  return (
    <DiscountContext.Provider value={{ 
      activeDiscount, 
      applyDiscount, 
      calculateDiscountedPrice,
      showDiscountPopup 
    }}>
      {children}
      {showDiscountPopup && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {activeDiscount}% discount applied to all products!
        </div>
      )}
    </DiscountContext.Provider>
  );
};

export const useDiscount = () => {
  const context = useContext(DiscountContext);
  if (context === undefined) {
    throw new Error('useDiscount must be used within a DiscountProvider');
  }
  return context;
}; 