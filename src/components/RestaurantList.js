import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const RestaurantList = ({ restaurants }) => {
  const boldTextStyle = {
    fontWeight: 'bold',
    // Add any other stylistic properties you want
  };

  return (
    <List>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <ListItem>
            <ListItemText
              primary={<span style={boldTextStyle}>{restaurant.name}</span>}
              secondary={`Type: ${restaurant.type}`}
            />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default RestaurantList;
