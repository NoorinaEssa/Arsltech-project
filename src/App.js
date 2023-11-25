import './App.css';
import Nav from './components/Nav';
// import {link} from './components/';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Testimonials } from './components/Testimonials';
import Footer from './components/Footer';
import Signup from './components/Signup';




function App() {
  return (
<>
<Nav />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About />} />
<Route path="/signup" element={<Signup />} />

</Routes>

</>
  );
}

export default App;
