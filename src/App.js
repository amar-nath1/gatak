
// import './App.css';

import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Designer from './components/pages/Designer';
// import Designer2 from './Designer2';
import Gallery from './components/pages/Gallery';
import SignupPage from './components/SignUpPage';
import AboutUsPage from './components/AboutUs';

function App() {
  return (
    <Router>
    
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route exact path="/our-designers" element={<Designer/>} />
      {/* <Route exact path="/designer1" component={Designer1} /> */}
      {/* <Route exact path="/designer2" component={Designer2} /> */}
      <Route exact path="/gallery" element={<Gallery/>} />
      <Route exact path="/about-us" element={<AboutUsPage/>} />
      <Route exact path="/login" element={<SignupPage/>} />
    </Routes>
  </Router>
    
  );
}

export default App;
