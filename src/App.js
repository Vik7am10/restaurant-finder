// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CityStatePage from './pages/CityStatePage';
import { Container } from '@mui/material';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:city/:state" element={<CityStatePage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
