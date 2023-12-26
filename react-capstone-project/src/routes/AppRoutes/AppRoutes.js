import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import AboutUs from '../../pages/AboutUsPage/AboutUs/AboutUs';
import { PageNotFound } from '../../containers/shared/PageNotFound/PageNotFound';
import HomePage from '../../pages/HomePage/HomePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ContactUsPage from '../../pages/ContactUsPage/ContactUsPage';
import ProductsPage from '../../pages/ProductsPage/ProductsPage';
import History from '../../pages/AboutUsPage/History/History';
import ProductDetails from '../../pages/ProductsPage/Products/ProductDetails/ProductDetails';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />}>
          <Route path='about-us' element={<AboutUs />} />
          <Route path='history' element={<History />} />
        </Route>
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
library.add(fas, far, fab);
