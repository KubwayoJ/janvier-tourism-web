
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './pages/Singup';

import Reservation from '../src/pages/Reservation';
import Login from '../src/pages/Login';
import AboutUs from '../src/sections/AboutUs';
import ContactUs from '../src/sections/ContactUs';
import Attractions from '../src/pages/Attractions';
import Packages from '../src/pages/Packages';
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Payment from './pages/Payment';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col justify-between">
        <Navbar />
        <main className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}