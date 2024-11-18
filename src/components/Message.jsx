import message from '../img/message.png';       

const Message = () => {
    return (
      <section className="section container mx-auto mt-6 py-16 md:py-20 px-4 md:px-6 lg:px-40">
        <div className="message__container grid md:grid-cols-2 gap-8 md:gap-12 bg-primary dark:bg-gray-800 p-6 md:p-10 rounded-2xl">
          <form className="message__form text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white mb-6">
              Send Good <br/> Wishes!
            </h2>
            <input 
              type="email" 
              placeholder="Write your message" 
              className="message__input w-full md:w-[280px] bg-white dark:bg-gray-700 text-gray-700 dark:text-white p-3 md:p-4 rounded-full mb-4 outline-none"
            />
            <button className="button message__button bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-11 rounded-full transition-colors w-full md:w-auto">
              Send Message
            </button>
          </form>
  
          <img 
            src={message} 
            alt="message" 
            className="message__img w-[160px] sm:w-[200px] md:w-[320px] justify-self-center transform rotate-[15deg]"
          />
        </div>
      </section>
    );
  };
  
  export default Message;