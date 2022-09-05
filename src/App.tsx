import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import './App.scss';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <div className="main-wrapper">
        <Header/>
        <Skills/>
        <Projects />
        <Form/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
