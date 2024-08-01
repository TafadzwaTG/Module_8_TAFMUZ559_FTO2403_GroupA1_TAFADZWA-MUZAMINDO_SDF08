import React from 'react';
import './components/assets/styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Intro />
      <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
