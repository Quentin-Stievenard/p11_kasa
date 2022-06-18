import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// screen
import Home from './screen/Home/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
