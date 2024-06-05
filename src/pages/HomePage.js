// src/pages/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const cityFormatted = city.toLowerCase().replace(/\s+/g, '-');
    const stateFormatted = state.toLowerCase();
    navigate(`/${cityFormatted}/${stateFormatted}`);
  };

  // We allow users to search for restaurants by entering city and state which would take them to a new page displaying restaurants in that city.
  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Find Restaurants by City and State
        </Typography>
        <Box component="form" onSubmit={handleSubmit} mt={3}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Search
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
