import React from "react";
import image1 from '../Asset/EXPENSE-MANAGEMENT.png'
import image2 from '../Asset/study.webp'
import image3 from '../Asset/0_Hdm7hBTZ-hKlbtlV.png'
import image4 from '../Asset/OIP (1).jpg'
import image5 from '../Asset/OIP.jpg'
import image6 from '../Asset/EduStreamProjectImage.png'
const Project = () => {
  const projectList = [
    {
      id: 1,
      image: image2,
      title: "Major Project",
      description: "StudyNotion offers an engaging, interactive learning experience for students while empowering instructors to share their expertise and connect with a global audience.",
      link: "https://www.example.com/project1",
    },
    {
      id: 2,
      image: image1,
      title: "Mini Project",
      description: "The Expense Management project streamlines financial tracking by enabling users to upload bills, set budgets, and analyze expenses through an intuitive interface.",
      link: "https://www.example.com/project2",
    },
    {
      id: 3,
      image: image4,
      title: "HTML & CSS Project",
      description: "A tribute Page, Webpage Including Form, Parallax Website, Landing Page, Technical Document, Cards, Bar Loader, Stippling Text, Spinning Text, 3D Animation",
      link: "https://www.example.com/project1",
    },
    {
      id: 4,
      image: image5,
      title: "HTML, CSS & JavaScript Project",
      description: "Password Generator, Portfolio Website, Quiz App, To-Do List, Weather App.....",
      link: "https://www.example.com/project1",
    },
    {
      id: 5,
      image: image3,
      title: "React Project",
      description: "Portfolio Website, Quiz App, Password Generator, Tic Tac Toe Game, To-Do List, QR Generator App",
      link: "https://www.example.com/project1",
    },
    {
      id: 5,
      image: image6,
      title: "EduStream",
      description: "Portfolio Website, Quiz App, Password Generator, Tic Tac Toe Game, To-Do List, QR Generator App",
      link: "https://www.example.com/project1",
    },
  ];

  return (
    <section className="bg-[#101010] text-center mt-10">
      <h2 className="text-4xl font-bold text-white">Projects</h2>
      <div className="flex flex-wrap justify-around mx-auto w-4/5 ">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="w-full  sm:w-[45%] lg:w-[30%] bg-gray-800 rounded-lg shadow-md overflow-hidden border-2 border-gray-600 transform transition-transform duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-xl mb-8"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-700"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
