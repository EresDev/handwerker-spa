import React from 'react';
import MainMenu from './Shared/MainMenu';
import Home from './Home';
import Footer from './Shared/Footer';

function App() {
  return (
      <React.Fragment>
        <MainMenu />
        <Home />
        <Footer />
      </React.Fragment>
  );
}

export default App;
