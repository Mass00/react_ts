import React from 'react';
import './App.css';
import { Header } from './Componnents/Header/Header';
import { Main } from './Componnents/Main/Main';
import { Footer } from './Componnents/Footer/Footer';

function App() {
  return (
    /* Grid-container */
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
