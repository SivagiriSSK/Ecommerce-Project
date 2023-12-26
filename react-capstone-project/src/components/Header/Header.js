import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MenuList from '../MenuList/MenuList';
import './Header.scss';

function Header() {
  return (
    <header className='header-margin'>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top header-background'>
        <div className='container-fluid '>
          <a className='navbar-brand float-start' href='#'>
            <img
              src='./assets/images/shopping-cart.png'
              className='shopping-icon'
              alt='shopping-logo'
            />
            <span className='shop-name'>
              <span className='ms-1'>Siva Clothing Shop</span>
            </span>
          </a>

          <div className='float-end'>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <label htmlFor='search-input-field' data-testid='search-input-icon'>
                {' '}
                <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' size='lg' />
              </label>
              <input
                type='text'
                id='search-input-field'
                className='search-hover'
                placeholder='Search Products...'
              />
              <span data-testid='menuListComponent'>
                <MenuList />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
