import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { BsHeart } from 'react-icons/bs';

//images
import new1 from '../img/new1.png';
import new2 from '../img/new2.png';
import new3 from '../img/new3.png';
import new4 from '../img/new4.png';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const newArrivals = [
  {
    img: new1,
    price: "$95",
    title: "Reindeer"
  },
  {
    img: new2,
    price: "$20",
    title: "Snow Globe"
  },
  {
    img:new3,
    price: "$75",
    title: "Sledge"
  },
  {
    img: new4,
    price: "$15",
    title: "Christmas Wreath"
  }
];

const NewCard = ({ img, price, title }) => (
  <article className="new__card relative w-[230px] bg-white dark:bg-gray-800 p-4 pb-6 rounded-xl text-center mb-16 overflow-hidden">
    {/* Overlay */}
    <div className="absolute w-[250px] h-[250px] bg-primary rounded-full -top-20 -left-2.5 z-0" />
    
    <img 
      src={img} 
      alt={title}
      className="new__img relative w-[150px] mx-auto mb-8 transform hover:-translate-y-2 transition-transform duration-300"
    />
    
    <h3 className="text-2xl font-semibold">{price}</h3>
    <span className="font-medium text-gray-600 dark:text-gray-300">{title}</span>
    
    <button className="button new__button absolute right-0 bottom-0 flex p-2 rounded-tr-sm rounded-bl-sm rounded-br-lg bg-primary">
      <BsHeart className="text-xl text-white" />
    </button>
  </article>
);

const New = () => {
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