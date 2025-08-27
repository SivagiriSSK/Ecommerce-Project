import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BestSeller.scss';

const BestSeller = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  useEffect(() => {
    fetch(
      'http://localhost:5001/products?bestSellerRanking=1&bestSellerRanking=2&bestSellerRanking=3&bestSellerRanking=4'
    )
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        setBestSellingProducts(resInJson);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  return (
    <>
      <div className='flex-container mt-3 ms-4 me-4'>
        {bestSellingProducts?.map((product) => {
          console.log(product);
          return (
            <div className='best-selling-product  shadow m-2' key={product.id}>
              <div className='card card-shadow'>
                <img
                  src={product.imageUrl}
                  className='card-img-top product-image'
                  alt={product.imageAltText}
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
                    <Link to={'/products'} className='btn btn-primary shadow'>
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='text-center mt-2 mb-3 '>
        <button type='button' className='btn btn-success shadow' data-testid='seeMoreBtn'>
          <Link to={'/products'} className='text-white'>
            See More
          </Link>
        </button>
      </div>

      <div className='card margin p-2 mb-3 mt-0 shadow'>
        <div className='order-info m-2'>
          <div className='row '>
            <div className='col-md-4'>
              <img
                src='./assets/images/delivery-van.png'
                className='img-fluid rounded-start shipping-info-image'
                alt='delivery-van-image'
              />
            </div>
            <div className='col-md-8'>
              <div className='ms-1 mt-4'>
                <p className='mb-0 shopping-info'>FREE SHIPPING & RETURN</p>
                <p className='shopping-description'> Free shipping on all orders over Rs.499</p>
              </div>
            </div>
          </div>

          <div className='row '>
            <div className='col-md-4'>
              <img
                src='./assets/images/money-back-image.png'
                className='img-fluid rounded-start ms-4 shipping-info-image'
                alt='money-back-image'
              />
            </div>
            <div className='col-md-8'>
              <div className=' ms-0 mt-4'>
                <p className='mb-0 shopping-info'>MONEY BACK GUARANTEE</p>
                <p className='shopping-description'>100% money back guarantee</p>
              </div>
            </div>
          </div>

          <div className='row '>
            <div className='col-md-4'>
              <img
                src='./assets/images/customer-support.jpg'
                className='img-fluid rounded-start shipping-info-image'
                alt='customer-support-image'
              />
            </div>
            <div className='col-md-8'>
              <div className='ms-0 mt-4'>
                <p className='mb-0 shopping-info'>ONLINE SUPPORT 24/7</p>
                <p className='shopping-description'>Reach us out at anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
