import  { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    package: '',
    numPeople: 1,
    travelDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission
    console.log('Reservation submitted:', formData);
  };

  return (
    <section className="py-10 bg-cover text-white bg-no-repeat bg-[url(./pages/adventure.jpg)]">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Reservation</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <select
          name="package"
          value={formData.package}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        >
          <option value="">Select a Package</option>
          <option value="safari">Safari in Tanzania</option>
          <option value="gorilla">Gorilla Trekking in Rwanda</option>
          <option value="beach">Beach Vacation in Zanzibar</option>
        </select>
        <input
          type="number"
          name="numPeople"
          value={formData.numPeople}
          onChange={handleChange}
          placeholder="Number of People"
          className="w-full p-3 border rounded"
        />
        <input
          type="date"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">Book Now</button>
      </form>
    </section>
  );
};

export default Reservation;
