


import img1 from '../pages/packimage/img1.png'
import img02 from '../pages/packimage/img02.png'
import imgl03 from '../pages/packimage/imgl03.png'
import  burundi from '../pages/burundi.jpeg'
import  eastflag from '../pages/eastflag.jpeg'





const packages = [
  {
    name: 'Luxury Safari in Tanzania',
    price: 'USD 3000',
    description: 'A 7-day luxury safari through Serengeti and Ngorongoro Crater with a private guide.',
    image: img02
  },
  {
    name: 'Gorilla Trekking in Rwanda',
    price: 'USD 1500',
    description: 'A 4-day package to trek and interact with the mountain gorillas in Volcanoes National Park.',
    image: img1
  },
  {
    name: 'Beach Vacation in Zanzibar',
    price: 'USD 1200',
    description: 'A 5-day all-inclusive beach vacation on the beautiful Zanzibar Island, with tours and relaxation.',
    image: imgl03
  },
 
  {
    name: 'Luxury Safari in Tanzania',
    price: 'USD 3000',
    description: 'A 7-day luxury safari through Serengeti and Ngorongoro Crater with a private guide.',
    image: burundi
  },
  {
    name: 'Gorilla Trekking in Rwanda',
    price: 'USD 1500',
    description: 'A 4-day package to trek and interact with the mountain gorillas in Volcanoes National Park.',
    image: eastflag
  },
  {
    name: 'Beach Vacation in Zanzibar',
    price: 'USD 1200',
    description: 'A 5-day all-inclusive beach vacation on the beautiful Zanzibar Island, with tours and relaxation.',
    image: imgl03
  },
];

const Packages = () => (
  <section className="py-10">
    <h2 className="text-3xl font-bold text-center mb-6">East Africa Tour Packages</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((tourPackage,index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg ">
          <img src={tourPackage.image} alt={tourPackage.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-2xl font-semibold">{tourPackage.name}</h3>
          <p className="text-lg text-teal-600">{tourPackage.price}</p>
          <p className="text-md mt-2">{tourPackage.description}</p>
          <a href="/reservation" className="mt-4 inline-block bg-yellow-500 text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-600">Book Now</a>
        </div>
      ))}
    </div>
  </section>
);

export default Packages;
