

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white p-2 shadow-lg fixed w-full z-auto ">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-extrabold">Explore East Africa</h1>
      <div className="space-x-4">
        {/* Navigation links */}
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/attractions" className="hover:text-gray-300">Attractions</a>
        <a href="/packages" className="hover:text-gray-300">Packages</a>
        <a href="/reservation" className="hover:text-gray-300">Reservation</a>
        <a href="/about-us" className="hover:text-gray-300">About Us</a>
        <a href="/contact-us" className="hover:text-gray-300">Contact Us</a>
        <a href="/login" className="hover:text-gray-300">Login</a>
        <a href="/signup" className="hover:text-gray-300">Signup</a>
      </div>
    </div>
  </nav>
);

  
}

export default Navbar
