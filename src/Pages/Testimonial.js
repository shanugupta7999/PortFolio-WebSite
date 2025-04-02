import React from 'react';
import boss from '../Asset/boss.png'
import harsh from '../Asset/harsh.jpg'
const Testimonial = () => {
  const testimonials = [
    {
      name: 'Gobinda Chandra Lugun',
      image: boss, // Replace with the actual image path
      rating: 5,
      feedback:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quis voluptas fugiat vitae omnis id, voluptatibus commodi ipsam asperiores voluptatum, tempora eius iste laudantium harum consequatur molestias non! Amet, nostrum!',
    },
    {
      name: 'Harsh Patil',
      image: harsh, // Replace with the actual image path
      rating: 5,
      feedback:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quis voluptas fugiat vitae omnis id, voluptatibus commodi ipsam asperiores voluptatum, tempora eius iste laudantium harum consequatur molestias non! Amet, nostrum!',
    },
    {
      name: 'Name3',
      image: 'image1', // Replace with the actual image path
      rating: 5,
      feedback:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quis voluptas fugiat vitae omnis id, voluptatibus commodi ipsam asperiores voluptatum, tempora eius iste laudantium harum consequatur molestias non! Amet, nostrum!',
    },
  ];

  return (
    <section className="testimonials bg-[#101010] py-20" id="testimonials">
      <div className="testimonials-box flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-16 mt-12">Testimonials</h2>
        <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-item bg-[#151515] border-2 border-gray-500 hover:border-indigo-500 hover:scale-105 transform transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center gap-6 shadow-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-40 h-40 rounded-full border-4 border-indigo-500 shadow-lg"
              />
              <h2 className="text-2xl font-semibold text-white">{testimonial.name}</h2>
              <div className="rating flex justify-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="bx bxs-star text-yellow-400 text-xl"></i>
                ))}
              </div>
              <p className="text-white text-base leading-relaxed">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
