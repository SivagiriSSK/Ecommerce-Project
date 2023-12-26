import MenuItem from './MenuItem/MenuItem';

const MenuList = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'Products',
      url: '/products'
    },
    {
      id: 3,
      title: 'About Us',
      url: '/about-us'
    },
    {
      id: 4,
      title: 'Contact Us',
      url: '/contact-us'
    }
  ];

  return (
    <ul className='navbar-nav me-auto mb-2 mb-md-0 '>
      {menuItems.map((menu) => {
        console.log(menu);
        return <MenuItem key={menu.id} {...menu}></MenuItem>;
      })}
    </ul>
  );
};

export default MenuList;
