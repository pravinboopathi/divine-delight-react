import { BsHeart } from 'react-icons/bs';
import { useDiscount } from '../context/DiscountContext';
import { useState, useEffect } from 'react';

const Gift = () => {
  const { calculateDiscountedPrice, activeDiscount } = useDiscount();

  const [prices] = useState({
    grapeWine: 320,
    pineappleWine: 350,
    amlaWine: 400,
    plumCake: 550,
    carrotCake: 600,
    fruitNutCake: 600,
    chocoDelight: 700,
    bananaCake: 600
  });

  const [wineData, setWineData] = useState([
    {
      img: "1.png",
      price: prices.grapeWine,
      originalPrice: prices.grapeWine,
      title: "Grape Wine"
    },
    {
      img: "3.png",
      price: prices.pineappleWine,
      originalPrice: prices.pineappleWine,
      title: "Pineapple Wine"
    },
    {
      img: "2.png",
      price: prices.amlaWine,
      originalPrice: prices.amlaWine,
      title: "Amla Wine"
    }
  ]);

  const [cakeData, setCakeData] = useState([
    {
      img: "pm.avif",
      price: prices.plumCake,
      originalPrice: prices.plumCake,
      title: "Plum Cake"
    },
    {
      img: "cck.jpg",
      price: prices.carrotCake,
      originalPrice: prices.carrotCake,
      title: "Carrot Cake"
    },
    {
      img: "fnt.jpg",
      price: prices.fruitNutCake,
      originalPrice: prices.fruitNutCake,
      title: "Fruit Nut Cake"
    },
    {
      img: "ccd.jpg",
      price: prices.chocoDelight,
      originalPrice: prices.chocoDelight,
      title: "Choco Delight"
    },
    {
      img: "bcake.jpg",
      price: prices.bananaCake,
      originalPrice: prices.bananaCake,
      title: "Banana Cake"
    }
  ]);

  useEffect(() => {
    if (activeDiscount > 0) {
      const updatedWineData = wineData.map(item => ({
        ...item,
        price: calculateDiscountedPrice(item.originalPrice)
      }));
      setWineData(updatedWineData);

      const updatedCakeData = cakeData.map(item => ({
        ...item,
        price: calculateDiscountedPrice(item.originalPrice)
      }));
      setCakeData(updatedCakeData);
    }
  }, [activeDiscount, calculateDiscountedPrice, wineData, cakeData]);

  const GiftCard = ({ img, price, originalPrice, title }) => (
    <article className="gift__card relative bg-white dark:bg-gray-800 p-6 pt-4 rounded-xl shadow-lg">
      <BsHeart className="absolute top-4 right-4 text-xl text-primary cursor-pointer" />
      
      <h3 className="text-lg md:text-xl font-semibold">
        ₹{activeDiscount > 0 ? price : originalPrice}
        {activeDiscount > 0 && (
          <span className="ml-2 text-sm line-through text-gray-400">₹{originalPrice}</span>
        )}
      </h3>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</span>
    </article>
  );

  return (
    <section className="section container py-16 md:py-20 px-4 md:px-6 lg:px-32" id="gifts">
      <h1 className="text-[1.25rem] sm:text-[1.5rem] font-medium text-center mb-10">
        Savor the Flavors of the Season
      </h1>
      
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
        Wine Flavors
      </h2>

      <div className="gift__container grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-32">
        {wineData.map((item, index) => (
          <GiftCard key={index} {...item} />
        ))}
      </div>

      <div className="my-10"></div>

      <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
        Cake Flavors
      </h2>

      <div className="gift__container grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 py-8 px-6 md:px-10 lg:px-32 gap-6">
        {cakeData.map((item, index) => (
          <GiftCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Gift;