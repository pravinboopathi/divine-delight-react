import logo from '../img/logo.png';
import aviable1 from '../img/aviable1.png';
import aviable2 from '../img/aviable2.png';
import footer from '../img/footer1.png';
import footer2 from '../img/footer2.png';


const Footer = () => {
    return (
      <footer className="footer section px-4 md:px-20 lg:px-40 py-20 overflow-hidden ">
        <div className="footer__container container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
          <div>
            <a href="#" className="footer__logo flex items-center gap-1 text-gray-900 dark:text-white font-medium mb-4">
              <img src={logo} alt="logo" className="w-6" />
              Divine Delight's
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This Christmas give <br/> a lot of love
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="footer__links flex flex-col gap-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Discounts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Shipping mode</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="footer__links flex flex-col gap-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-4">Soon Available On</h3>
            <div className="footer__aviables flex flex-col gap-3">
              <img src={aviable1} alt="" className="w-[100px] cursor-pointer" />
              <img src={aviable2} alt="" className="w-[100px] cursor-pointer" />
            </div>
          </div>
  
          <img src={footer} alt="" className="footer__img1 hidden md:block absolute w-[80px] md:w-[120px] top-1/4 right-8 lg:top-full lg:left-0" />
          <img src={footer2} alt="" className="footer__img2 hidden md:block absolute w-[80px] md:w-[120px] top-3/4 -right-16 lg:top-2/5 lg:-right-28" />
        </div>
  
        <span className="footer__copy block text-center text-sm text-gray-400 mt-14 mb-4">
          &#169; Divine Delight's. All rights reserved
        </span>
      </footer>
    );
  };
  
  export default Footer;