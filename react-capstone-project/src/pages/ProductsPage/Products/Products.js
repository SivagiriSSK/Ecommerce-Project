import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HelmetSetup from '../../../components/HelmetSetup/HelmetSetup';
import './Products.scss';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [buttonText, setButtonText] = useState('Sort by');
  const location = useLocation();
  let productUrl = 'http://localhost:5000/products';
  function fetchProduct(productUrl) {
    const url = productUrl;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        setProductList(resInJson);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }

  function handleAllProducts() {
    productUrl = 'http://localhost:5000/products';
    fetchProduct(productUrl);
  }

  useEffect(() => {
    handleAllProducts();
  }, []);

  // let PriceDescendingOrder;
  function handleMenProducts() {
    productUrl = 'http://localhost:5000/products?category=Men';
    fetchProduct(productUrl);
  }

  function handleWomenProducts() {
    productUrl = 'http://localhost:5000/products?category=Women';
    fetchProduct(productUrl);
  }
  function handlekidsProducts() {
    productUrl = 'http://localhost:5000/products?category=Kids';
    fetchProduct(productUrl);
  }
  function handlePriceLowToHigh() {
    setButtonText('Price - Low to High');
    console.log(location.search);
    productUrl =
      'http://localhost:5000/products' + `${location.search}` + '_sort=maxRetailPrice&_order=desc';
    fetchProduct(productUrl);
  }

  function handlePriceHighToLow() {
    setButtonText('Price - High to Low');
    productUrl = 'http://localhost:5000/products?_sort=maxRetailPrice&_order=desc';
    fetchProduct(productUrl);
  }

  return (
    <>
      <HelmetSetup title='Products' />

      <div className='grid-wrapper'>
        <div className='categories-navigation-link'>
          <div>
            <h3 className='product-categories'>Categories</h3>

            <button
              type='button'
              className='d-block mb-2 link-primary categories-nav-btn'
              onClick={handleAllProducts}>
              <Link to='/products'>All</Link>
            </button>

            <button
              className='d-block mb-2 link-primary categories-nav-btn'
              onClick={handleMenProducts}>
              <Link to='?category=Men'>Men</Link>
            </button>

            <button
              className='d-block mb-2 link-primary categories-nav-btn'
              onClick={handleWomenProducts}>
              <Link to='?category=Women'>Women</Link>
            </button>

            <button
              className='d-block mb-2 link-primary categories-nav-btn'
              onClick={handlekidsProducts}>
              <Link to='?category=Kids'>Kids</Link>
            </button>
          </div>
        </div>
        <div>
          {/* Default dropstart button */}
          <div className='flex-container mb-2'>
            <div>
              <span className='ms-2 total-products' data-testid='productsFoundText'>
                {productList.length} Products Found
              </span>
            </div>

            <div className='btn-group dropstart  ms-2 me-3 '>
              <button
                type='button'
                className='btn btn-secondary dropdown-toggle shadow'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                <span data-testid='sortByBtn'>{buttonText}</span>
              </button>
              <ul className='dropdown-menu shadow'>
                <li>
                  <button className='dropdown-item' onClick={handlePriceLowToHigh}>
                    Price - Low to High
                  </button>
                </li>
                <li>
                  <button className='dropdown-item' onClick={handlePriceHighToLow}>
                    Price - High to Low
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className='product-grid-wrapper'>
            {productList?.map((product) => {
              console.log(product);

              return (
                <div className='best-selling-product  shadow mt-0 m-2 mb-4' key={product.id}>
                  <div className='card card-shadow'>
                    <Link to={`/products/${product.id}`} className='text-white'>
                      <img
                        src={product.imageUrl}
                        className='card-img-top product-image'
                        alt='shirt-image'
                      />
                      <div className='card-body'>
                        <h5 className='card-title mb-0'>{product.brand}</h5>
                        <p className='card-text mb-0'>{product.description}</p>
                        <span className='product-price'>
                          Rs.{' '}
                          {product.maxRetailPrice -
                            Math.round((product.maxRetailPrice * product.discountApplicable) / 100)}
                          <span id='productDiscount' className='text-decoration-line-through ms-1'>
                            Rs. {product.maxRetailPrice}
                          </span>
                          <span className='discount-percentage ms-2'>
                            ({product.discountApplicable}% OFF)
                          </span>
                        </span>
                        <div className='text-center mt-1'>
                          <button className='btn btn-primary shadow'>
                            <Link to={`/products/${product.id}`} className='text-white'>
                              Add to Cart
                            </Link>
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
