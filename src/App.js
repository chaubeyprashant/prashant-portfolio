import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ContactUs />
    </div>
  );
}

export default App;
