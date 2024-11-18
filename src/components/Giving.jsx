import giving1 from '../img/giving1.png'
import giving2 from '../img/giving2.png'
import giving3 from '../img/giving3.png'

const givingData = [
    {
      img: giving1,
      title: "Surprise gifts",
      description: "They are the best gifts there is."
    },
    {
      img: giving2,
      title: "Ornaments",
      description: "Give a moment to decorate."
    },
    {
      img: giving3,
      title: "Lots of love",
      description: "Give away feelings that last forever."
    }
  ]
  
  const Giving = () => {
    return (
      <section className="section container mt-20 lg:px-32 py-2 ">
        <h2 className="text-2xl  font-semibold text-center mb-10 text-titleColor">
          Start Giving This <br/> Christmas
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center">
          {givingData.map((item, index) => (
            <div key={index} className="text-center">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-24 md:w-32 mx-auto transform hover:-translate-y-1 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Giving