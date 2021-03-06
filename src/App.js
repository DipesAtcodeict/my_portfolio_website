import React from 'react';
import { grey } from '@material-ui/core/colors';
import AppBar from './components/AppBar';
import IntroCover from './components/IntroCover';
import About from './components/About';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <div style={{ backgroundColor: grey[900] }}>
      <AppBar />
      <IntroCover />
      <About />
      <Skills />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
