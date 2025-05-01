// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "your_service_id", // Replace with your EmailJS Service ID
//         "your_template_id", // Replace with your EmailJS Template ID
//         form.current,
//         "your_public_key" // Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//           console.log(result.text);
//         },
//         (error) => {
//           alert("Failed to send message, try again.");
//           console.log(error.text);
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <section className="text-center py-10">
//       <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
//       <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
//         <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 border rounded" required />
//         <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 border rounded" required />
//         <input type="tel" name="user_phone" placeholder="Your Phone" className="w-full p-3 border rounded" />
//         <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded h-32" required></textarea>
//         <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactUs;
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        form.current,
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.log(error.text);
          setLoading(false);
        }
      );
  };
  

  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
      <input
  type="text"
  name="user_email"
  placeholder="Name"
  className="w-full p-3 border rounded"
  required
  
  title="Enter a valid email address"
/>

<input
  type="email"
  name="user_email"
  placeholder="Your Email"
  className="w-full p-3 border rounded"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
  title="Enter a valid email address"
/>

<input
  type="number"
  name="user_email"
  placeholder="phone"
  className="w-full p-3 border rounded"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
  title="Enter a valid phone number"
/>

        <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded h-32" required></textarea>
        <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      
    </section>
  );
};

export default ContactUs;
