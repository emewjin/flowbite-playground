import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';

import Home from './Home';
import ModalTrigger from './Modal';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<ModalTrigger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
