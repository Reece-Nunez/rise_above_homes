import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Services from './pages/Services';
import './App.css'
import Navbar from './components/NavBar';
import Slideshow from './components/Slideshow';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import LoadingSpinner from './components/LoadingSpinner';
import HouseAnimation from './components/HouseAnimation';
import Footer from './components/Footer';
import Exteriors from './pages/exteriors'
import Home1 from './assets/example_home_1.jpg';
import Home2 from './assets/example_home_2.jpg';
import Home3 from './assets/example_home_3.jpg';

function AnimatedRoutes() {
  const location = useLocation();
  const images = [Home1, Home2, Home3];
  const pageTransitionVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: { duration: 1 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 }
    }
  };

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/services' element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}>
            <Services />
          </motion.div>
        } />
        <Route path='/' element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}
          >
            <>
              <div className="content-container">
                <Slideshow images={images} />
                <div>
                  <About />
                </div>
              </div>
              <div>
                <Gallery />
              </div>
              <div className='contact_form'>
                <ContactForm />
              </div>
            </>
          </motion.div>
        } />
        <Route path='/exteriors' element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}>
              <Exteriors />
            </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <HouseAnimation />;
  }

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App
