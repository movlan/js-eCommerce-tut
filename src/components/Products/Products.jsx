import React from 'react';
import Product from './Product/Product';
import { Grid } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Shoes',
    image:
      'https://images.ctfassets.net/hnk2vsx53n6l/2PwRp3gWOFxYVttu8prfK5/386a06b111f65a5fc76e84cec1ae43d1/v4a1jqmhdav37rh34cjc.png',
    description: 'Running shoes.',
    price: 100,
  },
  {
    id: 2,
    name: 'MacBook',
    image:
      'https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg',
    description: 'Apple laptop.',
    price: 2000,
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
