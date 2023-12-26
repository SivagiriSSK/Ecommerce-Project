import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

const AboutUsPage = () => {
  <h2>About Us Page</h2>;
  return (
    <>
      <HelmetSetup title='About Us' />

      <div style={{ marginTop: '70px' }}>
        <Link to='about-us' className='link-primary m-5'>
          <span className='h3'>About Us</span>
        </Link>
        <Link to='history' className='link-primary m-5'>
          <span className='h3'>History</span>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default AboutUsPage;
