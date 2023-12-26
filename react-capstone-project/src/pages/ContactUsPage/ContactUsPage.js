import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import { fetchApi } from '../../Utils/fetchApi';
import './ContactUsPage.scss';

const ContactUsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [contactData, setContactData] = useState([]);
  // const [getInTouchData, setGetInTouchData] = useState([]);

  const getName = useRef('');
  const getEmail = useRef('');
  const getMessage = useRef('');

  console.log(contactData);
  useEffect(() => {
    fetchApi('http://localhost:5000/contactData', 'GET')
      .then((resInJson) => {
        console.log(resInJson);
        if (resInJson.statucode !== 404) {
          setContactData(resInJson);
          setIsError(false);
        } else {
          setContactData([]);
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: getName.current.value,
      email: getEmail.current.value,
      message: getMessage.current.value
    };
    getName.current.value = '';
    getEmail.current.value = '';
    getMessage.current.value = '';
    fetch('http://localhost:5000/getInTouchData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  if (isLoading) {
    return <div className='spinner-border text-success mt-3'></div>;
  }

  if (isError) {
    return <div className='alert alert-danger'>Some Error Occured. Try again later</div>;
  }

  return (
    <>
      <HelmetSetup title='Contact Us' />
      {/* get the information from backend */}
      <div className='row container margin'>
        <div className='col-6'>
          <h2>Contact Us</h2>
          <p className='contact-us-para '>
            If you have any questions about us, our reviews, or just want to say hello, please feel
            free to reach out to us using the right side contact form! If you have specific comments
            about our reviews, we would encourage you to leave the comment in the contact form.
          </p>
          <div className='ms-5'>
            <div>
              <span>
                {' '}
                <FontAwesomeIcon
                  icon='fa-solid fa-map-location-dot '
                  size='xl'
                  className='contact-font'
                />
              </span>
              <span className='ms-4'>{contactData.address}</span>
            </div>
            <div className='mt-3'>
              <span>
                <FontAwesomeIcon icon='fa-solid fa-phone' size='xl' />
              </span>
              <span className='ms-4'>{contactData.phone[0]}</span>
              <p className='ms-5'>{contactData.phone[1]}</p>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon='fa-solid fa-envelope' size='xl' />
              </span>
              <span className='ms-4'>{contactData.email}</span>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <form>
            <div className='mb-3'>
              <label htmlFor='nameInput' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='nameInput'
                name='fullName'
                ref={getName}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='emailInput' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='emailInput'
                name='email'
                ref={getEmail}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <textarea
                className='form-control'
                id='message'
                rows='4'
                name='message'
                ref={getMessage}
                required
              />
            </div>
            <button
              type='submit'
              onClick={handleAddUser}
              className='btn btn-primary'
              data-testid='submitBtn'>
              Send Message
            </button>

            {isSaved ? (
              <div className='alert alert-success mt-3' data-testid='saveText'>
                Saved Successfully
              </div>
            ) : (
              ''
            )}
            {isError ? (
              <div className='alert alert-danger'>Some Error Occurred. Try again Later!</div>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactUsPage;
