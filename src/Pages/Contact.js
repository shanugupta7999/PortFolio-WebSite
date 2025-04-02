import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setResponseMessage(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      }); // Reset the form
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact bg-gray-800 py-20" id="contact">
      <h2 className="text-4xl font-bold text-white text-center mb-12 mt-12">
        Contact <span className="text-[#0080ff]">Me</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto flex flex-col items-center gap-8 px-6"
      >
        <div className="input-group w-full flex flex-wrap justify-between gap-6">
          <div className="input-box w-full md:w-[48%]">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-4 text-lg text-gray-800 bg-gray-900 rounded-xl border-2 border-[#0080ff] focus:outline-none focus:ring-2 focus:ring-[#0080ff]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 mt-4 text-lg text-gray-800 bg-gray-900 rounded-xl border-2 border-[#0080ff] focus:outline-none focus:ring-2 focus:ring-[#0080ff]"
              required
            />
          </div>
          <div className="input-box w-full md:w-[48%]">
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleInputChange}
              className="w-full p-4 text-lg text-gray-800 bg-gray-900 rounded-xl border-2 border-[#0080ff] focus:outline-none focus:ring-2 focus:ring-[#0080ff]"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full p-4 mt-4 text-lg text-gray-800 bg-gray-900 rounded-xl border-2 border-[#0080ff] focus:outline-none focus:ring-2 focus:ring-[#0080ff]"
              required
            />
          </div>
        </div>
        <div className="input-group-2 w-full">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-4 text-lg text-gray-800 bg-gray-900 rounded-xl border-2 border-[#0080ff] focus:outline-none focus:ring-2 focus:ring-[#0080ff] resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="btn bg-[#0080ff] text-white font-semibold py-3 px-6 rounded-xl mt-6 hover:bg-[#0080ff] transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      {responseMessage && (
        <p className="text-center mt-6 text-white">{responseMessage}</p>
      )}
    </section>
  );
};

export default Contact;