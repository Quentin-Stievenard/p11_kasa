import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// screen
import Home from './screen/Home/Home';
import Appartement from './screen/Appartement/Appartement';

//data
import data from './data.json';
import About from './screen/About/About';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/appartement/:id"
          element={<Appartement dataProps={data} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
