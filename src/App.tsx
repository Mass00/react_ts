import React from 'react';
import './App.css';
import { Header } from './Componnents/Header/Header';
import { Main } from './Componnents/Main/Main';
import { Footer } from './Componnents/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './Componnents/Main/Content/Profile/Profile';
import { Dialogs } from './Componnents/Main/Content/Dialogs/Dialogs';

function App() {
  return (
    /* Grid-container */
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dialogs" element={<Dialogs />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
