import React from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import Products from './Products/Products';
const ProductsPage = () => {
  return (
    <>
      <HelmetSetup title='Products' />
      <Products></Products>
    </>
  );
};

export default ProductsPage;
