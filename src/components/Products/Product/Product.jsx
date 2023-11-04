import React from 'react';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { css } from '@emotion/react';
import { AddShoppingCart } from '@mui/icons-material';

const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: '56.25%', // 16:9
        }}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'flex-end',
          })}
        >
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">${product.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton aria-label="add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
