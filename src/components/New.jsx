import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { BsHeart } from 'react-icons/bs';
import { useDiscount } from '../context/DiscountContext';
import { useState, useEffect } from 'react';

//images
import new1 from '../img/new1.png';
import new2 from '../img/new2.png';
import new3 from '../img/new3.png';
import new4 from '../img/new4.png';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const New = () => {
  const { calculateDiscountedPrice, activeDiscount } = useDiscount();

  const [prices] = useState({
    reindeer: 95,
    snowGlobe: 20,
    sledge: 75,
    wreath: 15
  });

  const [newArrivals, setNewArrivals] = useState([
    {
      img: new1,
      price: prices.reindeer,
      originalPrice: prices.reindeer,
      title: "Reindeer"
    },
    {
      img: new2,
      price: prices.snowGlobe,
      originalPrice: prices.snowGlobe,
      title: "Snow Globe"
    },
    {
      img: new3,
      price: prices.sledge,
      originalPrice: prices.sledge,
      title: "Sledge"
    },
    {
      img: new4,
      price: prices.wreath,
      originalPrice: prices.wreath,
      title: "Christmas Wreath"
    }
  ]);

  useEffect(() => {
    if (activeDiscount > 0) {
      const updatedArrivals = newArrivals.map(item => ({
        ...item,
        price: calculateDiscountedPrice(item.originalPrice)
      }));
      setNewArrivals(updatedArrivals);
    }
  }, [activeDiscount, calculateDiscountedPrice, newArrivals]);

  const NewCard = ({ img, price, originalPrice, title }) => {
    return (
      <article className="new__card relative w-[230px] bg-white dark:bg-gray-800 p-4 pb-6 rounded-xl text-center mb-16 overflow-hidden">
        <div className="absolute w-[250px] h-[250px] bg-primary rounded-full -top-20 -left-2.5 z-0" />
        
        <img 
          src={img} 
          alt={title}
          className="new__img relative w-[150px] mx-auto mb-8 transform hover:-translate-y-2 transition-transform duration-300"
        />
        
        <h3 className="text-2xl font-semibold">
          ${activeDiscount > 0 ? price : originalPrice}
          {activeDiscount > 0 && (
            <span className="ml-2 text-sm line-through text-gray-400">${originalPrice}</span>
          )}
        </h3>
        <span className="font-medium text-gray-600 dark:text-gray-300">{title}</span>
        
        <button className="button new__button absolute right-0 bottom-0 flex p-2 rounded-tr-sm rounded-bl-sm rounded-br-lg bg-primary">
          <BsHeart className="text-xl text-white" />
        </button>
      </article>
    );
  };

  return (
    <section className="section container mx-auto px-4 md:px-6 py-16" id="new">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16">
        New Arrivals
      </h2>

      <div className="max-w-[1024px] mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            }
          }}
          className="new-swiper"
        >
          {newArrivals.map((item, index) => (
            <SwiperSlide key={index} className="pb-12">
              <NewCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default New; 