import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import CompanyDetails from './components/CompanyDetails';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import About from './components/About'; // About page component
import Products from './components/Products'; // Products page component
import Services from './components/Services'; // Services page component
import Blog from './components/Blog'; // Blog page component
import ContactUs from './components/ContactUs'; // ContactUs page component
import './styles/App.css';

function App() {
  return (
    <Router>
      {/* Navbar will be present on all pages */}
      <Navbar />

      {/* Main Content */}
      <Routes>
        {/* Default Home Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Projects />
              <CompanyDetails />
              {/* <ContactForm /> */}
            </>
          }
        />

        {/* About Page Route */}
        <Route path="/about" element={<About />} />

        {/* Products Page Route */}
        <Route path="/products" element={<Products />} />

        {/* Services Page Route */}
        <Route path="/services" element={<Services />} />
        {/* Blog Page Route */}
        <Route path="/blog" element={<Blog />} />
        {/* ContactUs Page Route */}
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>

      {/* Footer will also be present on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
