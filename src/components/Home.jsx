import { DiscountProvider } from "../context/DiscountContext"
import Celebrate from "./Celebrate"
import Footer from "./Footer"
import Gift from "./Gifts"
import Giving from "./Giving"
import Hero from "./Hero"
import Message from "./Message"
import New from "./New"
import ScrollUp from "./ScrollUp"


const Home = () => {
    return (
        <div>

      
    <Hero/>
    <Giving/>
    <Celebrate/>
    <DiscountProvider>

    <Gift/>
    <New/>
    </DiscountProvider>
        <Message/>
  
    <Footer/>
    <ScrollUp/>
    </div>
    )
  }
  
  export default Home