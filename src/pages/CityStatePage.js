// src/pages/CityStatePage.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantList from '../components/RestaurantList';
import dummyDatabase from '../data/dummyDatabase';
import { Container, Typography, Box } from '@mui/material';

const CityStatePage = () => {
  const { city, state } = useParams();
  const cityStateKey = `${city}/${state}`;
  const restaurants = dummyDatabase[cityStateKey] || [];

  useEffect(() => {
    document.title = `Restaurants in ${city.replace("-", " ")}, ${state.toUpperCase()}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", `Find the best restaurants in ${city.replace("-", " ")}, ${state.toUpperCase()} catering to various dietary preferences.`);
    }
  }, [city, state]);

  // We check if restaurants in the queried city exist. If they do we display their names, Otherwise we print out a message.
  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Restaurants in {city.replace("-", " ")}, {state.toUpperCase()}
        </Typography>
        {restaurants.length > 0 ? (
          <RestaurantList restaurants={restaurants} />
        ) : (
          <Typography variant="body1">No restaurants found.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default CityStatePage;
