import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import AboutPage from './Pages/HomePage';
import Education from './Pages/Education';
import Project from './Pages/Project';
import Service from './Pages/Service';
import Testimonial from './Pages/Testimonial';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Service />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
