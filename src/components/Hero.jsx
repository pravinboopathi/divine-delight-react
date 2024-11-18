import home from '../img/home.png'

const Hero =()=>{
    return(
        <div>
              <section className="pt-24 md:pt-32 px-4 md:px-6 lg:px-0" id="home">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img 
            src={home}
            alt="home" 
            className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] justify-self-center order-1 md:order-none"
          />
  
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-titleColor leading-[1.2] mb-4">
              A Festive Blend of Joy <br />
              Premium Wines & Rich <br />
              Plum Cakes
            </h1>
            <p className="text-base text-gray-600 mb-8">
              Celebrate This Christmas & New Year with Our <br />
              Exclusive Seasonal Delights!
            </p>
            <a 
              href="#" 
              className="inline-block bg-primary hover:bg-primaryAlt text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Hero