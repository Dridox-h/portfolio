import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CurrentProject from './components/CurrentProject';


const Home = () => (
  <div>
    <CurrentProject />
    <Technologies />
    <Experience />
    <Projects />
  </div>
);

const Details = () => (
  <div>
    <Hero />
    <About />
  </div>
);

const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cy300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
        </div>
     
        <div className='container mx-auto px-8'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
          <Contact />
        </div>
      </div>
    </Router>
  )
}

export default App