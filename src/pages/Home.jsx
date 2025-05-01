

const Home = () => {
  return (
    <section className="text-center py-10 bg-cover  object-cover bg-no-repeat bg-[url(./pages/kivu.jpg)] text-white h-[100vh] justify-center items-center w-screen flex">
    <div className=" bg-opacity-40 rounded-xl bg-black/10  bg-cover items-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to East Africa</h2>
      <p className="text-lg mb-6">Explore breathtaking landscapes, rich culture, and unforgettable adventures.</p>
      <a href="/packages" className="bg-yellow-500 text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-600">Explore Packages</a>
    </div>
  </section>
  )
}

export default Home
