import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuList from '../MenuList/MenuList';
import './Footer.scss';

// footer component
const Footer = function () {
  const Icons = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon='fa-brands fa-facebook-f' />,
      dataTestId: 'facebookIcon'
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon='fa-brands fa-twitter' />,
      dataTestId: 'twitterIcon'
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon='fa-brands fa-google' />,
      dataTestId: 'googleIcon'
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon='fa-brands fa-instagram' />,
      dataTestId: 'instagramIcon'
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon='fa-brands fa-whatsapp' />,
      dataTestId: 'whatsappIcon'
    },
    {
      id: 6,
      icon: <FontAwesomeIcon icon='fa-brands fa-telegram' />,
      dataTestId: 'telegramIcon'
    }
  ];
  library.add(fas, far, fab);

  return (
    <footer className=' footer-link-background  text-center text-white p-2 mt-5'>
      <MenuList />
      <div className='container d-flex justify-content-center  pb-2'>
        <section className='row'>
          {Icons.map((icon) => {
            return (
              <a
                className='btn btn-outline-light rounded-circle me-2  icon-outline'
                href='/'
                data-testid={icon.dataTestId}
                key={icon.id}
                role='button'>
                {icon.icon}
              </a>
            );
          })}
        </section>
      </div>

      {/* set copyright text */}
      <div className='text-center footer-background'>
        &copy; Copyright 2023 | Siva Clothing Shop
      </div>
    </footer>
  );
};

export default Footer;
