import celebrate from '../img/celebrate.png'

const Celebrate = () => {
    return (
      <section className="section container py-16 md:py-32 px-4 md:px-6 lg:px-36" id="celebrate">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl text-titleColor font-semibold mb-6">
              Bringing Tradition <br/> to Your Table
            </h2>
            <p className="text-gray-600 mb-10 md:pr-28 text-sm sm:text-base px-4 md:px-0">
              Our passion for fine wines and decadent cakes drives us to craft the perfect festive treats. 
              Using the finest ingredients, our creations are a tribute to the season of love, laughter, and togetherness.
            </p>
            <a 
              href="#" 
              className="inline-block bg-primary hover:bg-primaryAlt text-white font-medium py-4 px-11 rounded-full transition-colors"
            >
              Send Good Wishes
            </a>
          </div>
  
          <img 
            src={celebrate} 
            alt="celebrate" 
            className="w-60 sm:w-72 md:w-[450px] justify-self-center"
          />
        </div>
      </section>
    )
  }
  
  export default Celebrate