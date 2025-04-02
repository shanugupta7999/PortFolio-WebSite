import React from 'react';

const Service = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: `Craft visually appealing and user-friendly interfaces:
      -Brand Identity Design: Develop logos, brand guidelines, and other visual elements.
      -Accessibility Design: Ensure compliance with accessibility standards (e.g., WCAG).
      -Design Systems: Build consistent design frameworks across platforms.
      Tools: Figma, Adobe XD.`,
    },
    {
      title: 'Frontend Development',
      description: `Develop responsive and interactive web applications:
      -Web Design Implementation: Translate mockups into functional web pages with HTML, CSS, and JavaScript.
      -Responsive Design: Create seamless experiences across desktops, tablets, and mobile devices.
      -UI Development: Craft intuitive and visually appealing interfaces.`,
    },
    {
      title: 'Backend Development',
      description: `Build robust server-side applications and manage data:
      -Database Management: Work with SQL (MySQL) and NoSQL (MongoDB).
      -Server-Side Logic: Implement backend functionality using Node.js and Express.js.
      -API Development: Create RESTful APIs for seamless communication.`,
    },
    {
      title: 'Software Engineering',
      description: `Deliver efficient and scalable software solutions:
      -Requirement Analysis: Gather and analyze system requirements for development.
      -System Design: Architect software solutions using design patterns and best practices.
      -Development: Build high-quality software using industry-standard tools and technologies.
      -Testing and Debugging: Ensure reliability through rigorous testing and debugging.`,
    },
  ];
  

  return (
    <section className="services bg-gray-900 text-white py-10 px-20" id="services">
      <h2 className="text-4xl font-bold text-center mb-12 mt-20">Services</h2>
      <div className="services-container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-box bg-gray-800 hover:bg-indigo-500 hover:text-black border-4 border-transparent hover:border-indigo-500 rounded-3xl p-8 transition-transform transform hover:scale-105 cursor-pointer shadow-lg"
          >
            <div className="service-info space-y-4">
              <h1 className="text-2xl font-bold">{service.title}</h1>
              <p className="text-md font-medium leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
