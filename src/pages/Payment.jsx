import React, { useState } from 'react';

const Payment = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing
    console.log('Payment submitted:', paymentInfo);
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Payment</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="expirationDate"
          value={paymentInfo.expirationDate}
          onChange={handleChange}
          placeholder="Expiration Date (MM/YY)"
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="cvv"
          value={paymentInfo.cvv}
          onChange={handleChange}
          placeholder="CVV"
          className="w-full p-3 border rounded"
        />
        <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">Pay Now</button>
      </form>
    </section>
  );
};

export default Payment;
