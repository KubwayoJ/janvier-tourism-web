
import serengeti from '../pages/serengeti.jpeg';
import volcano from '../pages/volcano.jpeg';
import massaimara from '../pages/massaimara.jpeg';
import zanzibe from '../pages/zanzibe.jpeg';
import bwindi from '../pages/bwindi.jpeg';
import kibira from '../pages/kibira.jpeg';


// Static data for East African attractions

const attractions = [
  {
    name: 'Serengeti National Park',
    location: 'Tanzania',
    description: 'Experience the Great Migration and diverse wildlife in one of the most famous parks in the world.',
    image: serengeti
  },
  {
    name: 'Mountain Gorillas in Volcanoes National Park',
    location: 'Rwanda',
    description: 'Get up close with endangered mountain gorillas in their natural habitat in the Volcanoes National Park.',
    image: volcano
  },
  {
    name: 'Maasai Mara National Reserve',
    location: 'Kenya',
    description: 'A world-renowned safari destihttps://source.unsplash.com/1600x900/?maasai-mara,kenyahttps://source.unsplash.com/1600x900/?maasai-mara,kenyanation famous for its big cats and the annual wildebeest migration.',
    image: massaimara
  },
  {
    name: 'Zanzibar Beaches',
    location: 'Tanzania',
    description: 'Explore the pristine beaches, turquoise waters, and rich cultural history of Zanzibar.',
    image: zanzibe
  },
  {
    name: 'Bwindi Impenetrable Forest',
    location: 'Uganda',
    description: 'A UNESCO World Heritage Site home to half of the world’s population of mountain gorillas.',
    image: bwindi
  },
  {
    name: 'Kibira Impenetrable Forest',
    location: 'Burundi',
    description: 'A UNESCO World Heritage Site home to half of the world’s population of mountain Inguge.',
    image: kibira
  }

];

const Attractions = () => (
  <section className="py-10">
    <h2 className="text-3xl font-bold text-center mb-6">Top East African Attractions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {attractions.map((attraction, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <img src={attraction.image} alt={attraction.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-2xl font-semibold">{attraction.name}</h3>
          <p className="text-lg text-teal-600">{attraction.location}</p>
          <p className="text-md mt-2">{attraction.description}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Attractions;