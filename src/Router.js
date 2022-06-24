import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// screen
import Home from './screen/Home/Home';
import Appartement from './screen/Appartement/Appartement';

import About from './screen/About/About';
import NotFound from './screen/NotFound/NotFound';

//data
import data from './data.json';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
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
