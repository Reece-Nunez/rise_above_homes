import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/NavBar';
import Slideshow from './components/Slideshow';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import LoadingSpinner from './components/LoadingSpinner';
import HouseAnimation from './components/HouseAnimation';
import Footer from './components/Footer';
import Home1 from './assets/example_home_1.jpg';
import Home2 from './assets/example_home_2.jpg';
import Home3 from './assets/example_home_3.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const images = [Home1, Home2, Home3];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <HouseAnimation />;
  }

  return (

    <div>
      <Navbar />
        <div className="content-container">
          <Slideshow images={images} />
          <div>
            <About />
          </div>
        </div>
        <div>
          <Gallery />
        </div>
        <div>
          <ContactForm />
        </div>
        <Footer />
    </div>
  )
}

export default App
