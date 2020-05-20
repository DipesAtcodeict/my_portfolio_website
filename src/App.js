import React from 'react';
import AppBar from './components/AppBar';
import IntroCover from './components/IntroCover';
import About from './components/About';
import grey from '@material-ui/core/colors/grey';

const App = () => {
  return (
    <div style={{ backgroundColor: grey[900] }}>
      <AppBar />
      <IntroCover />
      <About />
    </div>
  );
};

export default App;
