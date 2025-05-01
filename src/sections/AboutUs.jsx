import img4 from '../assets/img4.jpg'
 const AboutUs = () => {
   return (
    <section className="flex items-center w-[100%] bg-cover text-white bg-no-repeat bg-[url(./pages/adventure.jpg)] bg-center object-center"> 
    <div className="w-[40%] text-center py-10 ">    
    <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-6">We are dedicated to showcasing the beauty and culture of East Africa. Our platform offers curated travel experiences, attractions, and tourism packages across Rwanda, Kenya, Uganda, Tanzania, and Burundi.</p>
   <p className="text-lg">Explore the wonders of East Africa with us!</p>
   </div>
   <div className="w-[20rem] h-[20rem] rounded-full bg-gray-200 flex justify-center items-center py-20 mt-25 ml-auto  ">
<img src={img4} alt="img4" className='rounded-full w-20 h-20 object-cover transition-colors duration-1000 ease-in-out' />
   </div>
   <div className='w-[10%] text-center py-10'>
   <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

   </div>
   </section>

   )
 }
 
 export default AboutUs
 