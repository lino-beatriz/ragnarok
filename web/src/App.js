import React from 'react';
import './styles.css';

import Routes from './routes.js';

import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';

const App = () => (
  <div className="App">
      <Header />
      <Routes />
      <Footer />
  </div>
);

export default App;
