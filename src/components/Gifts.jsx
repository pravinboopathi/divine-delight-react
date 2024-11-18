import { BsHeart } from 'react-icons/bs';





const wineData = [
  {
    img: "1.png",
    price: "₹320",
    title: "Grape Wine"
  },
  {
    img: "3.png",
    price: "₹350",
    title: "Pineapple Wine"
  },
  {
    img: "2.png",
    price: "₹400",
    title: "Amla Wine"
  }
];

const cakeData = [
  {
    img: "pm.avif",
    price: "₹550",
    title: "Plum Cake"
  },
  {
    img: "cck.jpg",
    price: "₹600",
    title: "Carrot Cake"
  },
  {
    img: "fnt.jpg",
    price: "₹600",
    title: "Fruit Nut Cake"
  },
  {
    img: "ccd.jpg",
    price: "₹700",
    title: "Choco Delight"
  },
  {
    img: "bcake.jpg",
    price: "₹600",
    title: "Banana Cake"
  }
];

const GiftCard = ({ img, price, title }) => (
  <article className="gift__card relative bg-white dark:bg-gray-800 p-6 pt-4 rounded-xl shadow-lg">
    <BsHeart className="absolute top-4 right-4 text-xl text-primary cursor-pointer" />
    
    <h3 className="text-lg md:text-xl font-semibold">{price}</h3>
    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</span>
  </article>
);

const Gift = () => {
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