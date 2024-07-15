import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Topo from './components/Topo';
import SecaoVideo from './components/SecaoVideo';
import NovoVideo from './components/NovoVideo';
import Footer from './components/Footer';
import { VideoProvider } from './components/context/VideoContext.js';

function App() {
  return (
    <VideoProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Topo />
                <SecaoVideo title="FRONT END" category="frontend" />
                <SecaoVideo title="BACK END" category="backend" />
                <SecaoVideo title="MOBILE" category="mobile" />
              </>
            } />
            <Route path="/novo-video" element={<NovoVideo />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </VideoProvider>
  );
}

export default App;
