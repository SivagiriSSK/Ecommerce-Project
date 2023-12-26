import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { fetchApi } from '../../../../Utils/fetchApi';
import './ProductDetails.scss';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  const [productRating, setProductRating] = useState(0);
  console.log(productRating);
  console.log(isSaved);
  const { id } = useParams();
  const getName = useRef('');
  const getEmail = useRef('');
  const getPhone = useRef('');
  const getReview = useRef('');

  console.log(isError);

  // useEffect hook called onload itselfs
  const handleRating = (rate) => {
    setProductRating(rate);
  };

  const productReviews = product.reviews;
  console.log(productReviews);

  useEffect(() => {
    getProducts();
  }, []);
  console.log(product);

  const getProducts = async () => {
    fetchApi(`http://localhost:5000/products?id=${id}`, 'GET')
      .then((resInJson) => {
        // capturing converted JSON res.
        console.log(resInJson);
        if (resInJson.statucode !== 404) {
          setProduct(resInJson[0]);
          setIsError(false);
        } else {
          setProduct([]);
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log('its end');
      });
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    const newUser = {
      id: `${id}`,
      name: product.name,
      brand: product.brand,
      description: product.description,
      imageUrl: product.imageUrl,
      thumbnailUrl: product.thumbnailUrl,
      imgAltText: product.imageAltText,
      maxRetailPrice: product.maxRetailPrice,
      category: product.category,
      discountApplicable: product.discountApplicable,
      added: product.added,
      quantity: product.quantity,
      bestSellerRanking: product.bestSellerRanking,
      featured: product.featured,
      reviews: [...product.reviews]
    };

    const data = {
      id: newUser.reviews.length + 1,
      name: getName.current.value,
      phone: getPhone.current.value,
      email: getEmail.current.value,
      rating: productRating,
      review: getReview.current.value
    };
    console.log(newUser.reviews.length);

    console.log([...newUser.reviews]);
    newUser.reviews.push(data);
    getName.current.value = '';
    getPhone.current.value = '';
    getEmail.current.value = '';
    getReview.current.value = '';
    setProductRating(0);

    fetch(`http://localhost:5000/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        setProduct(resInJson);
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  return (
    <>
      {' '}
      <div className='margin product-information '>
        <button className='btn btn-primary ms-5 mt-2'>
          <Link to='/products' className='text-white'>
            <FontAwesomeIcon icon='fa-solid fa-chevron-left' /> Back
          </Link>
        </button>

        <div className='mt-1  ms-5 product-flex'>
          <div className='mt-2'>
            <div className='shadow product-picture'>
              <img
                src={product.imageUrl}
                className='img-fluid rounded'
                alt={product.imageAltText}
              />
            </div>
          </div>

          <div className='ms-2 product-desc'>
            <p className='mb-2 '>{product.brand}</p>
            <h4 className='mb-0 '>{product.description}</h4>
            <hr />
            <span className='product-selling-price'>
              ₹
              {product.maxRetailPrice -
                Math.round((product.maxRetailPrice * product.discountApplicable) / 100)}
              <span id='productDiscount' className='text-decoration-line-through ms-1'>
                MRP ₹{product.maxRetailPrice}
              </span>
              <span className='discount-percentage ms-2'>({product.discountApplicable}% OFF)</span>
            </span>
            <div className='product-tax mt-1 mb-1'>inclusive of all taxes</div>
            <div>
              <div>
                <div
                  className='modal fade'
                  id='staticBackdrop'
                  data-bs-backdrop='static'
                  data-bs-keyboard='false'
                  tabIndex={-1}
                  aria-labelledby='staticBackdropLabel'
                  aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h3 className='modal-title' id='staticBackdropLabel'>
                          Write a Review
                        </h3>
                        <button
                          type='button'
                          className='btn-close remove-border'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        />
                      </div>
                      <div className='modal-body'>
                        <form className='m-3'>
                          <div className='mb-3'>
                            <label htmlFor='nameInput'>Name: </label>
                            <input
                              type='text'
                              className='input-form '
                              id='nameInput'
                              name='fullName'
                              ref={getName}
                            />
                          </div>
                          <div className='mb-3'>
                            <label htmlFor='emailInput'>Email:</label>
                            <input
                              type='email'
                              id='emailInput'
                              className='input-form email-input'
                              name='email'
                              ref={getEmail}
                            />
                          </div>

                          <div className='mb-3'>
                            <label htmlFor='phoneInput'>Phone:</label>
                            <input
                              type='tel'
                              id='phoneInput'
                              name='phoneInput'
                              className='input-form '
                              ref={getPhone}
                            />
                          </div>

                          <div className='mb-3'>
                            <label htmlFor='rating'>Rating:</label>
                            <Rating
                              className='rating-input'
                              onClick={handleRating}
                              initialValue={productRating}
                            />
                          </div>

                          <div className='mb-3'>
                            <label htmlFor='review' className='mb-0'>
                              Review:
                            </label>
                            <textarea
                              className='review-input mb-0'
                              id='review'
                              rows='4'
                              name='review'
                              ref={getReview}
                            />
                          </div>

                          <div className='modal-footer'>
                            <button
                              type='button'
                              className='btn btn-secondary'
                              data-bs-dismiss='modal'>
                              Cancel
                            </button>
                            <button
                              type='submit'
                              className='btn btn-primary'
                              data-bs-dismiss='modal'
                              onClick={handleAddReview}>
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                      {/* form ended here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-2 mb-0'>
              <button className='btn btn-primary shadow-lg'>
                <Link to={`/products/${product.id}`} className='text-white'>
                  Add to Cart
                </Link>
              </button>
            </div>
            <div className='product-reviews-info mt-3'>
              <span className='me-5 '> Total Reviews : {}</span>

              <div className='h3 mt-4'>
                <span className='me-5'> Customers Reviews</span>
                <span className='write-review-btn'>
                  {/* Button trigger modal */}
                  <button
                    type='button'
                    className='btn btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#staticBackdrop'>
                    Write a Review
                  </button>
                  {/* Modal */}
                </span>
              </div>
              <div className='mt-2'>
                {productReviews &&
                  productReviews.map((review) => {
                    return (
                      <div key={review.id}>
                        <div className='user-feedback mb-2 user-flex'>
                          <div className='mb-0'>
                            <img
                              src='./assets/images/user-image.png'
                              className='user-image'
                              alt={product.imageAltText}
                            />
                          </div>
                          <div className='me-5 ms-1'>
                            <p id='userName' className='mb-0 text-primary'>
                              {review.name}
                              <Rating className='ms-3 mt-0' initialValue={review.rating} />
                            </p>
                            <p id='userReview' className='mt-0'>
                              {review.review}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
