import { screen, render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('has search input icon', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    expect(screen.getByTestId('search-input-icon')).toBeInTheDocument();
  });

  it('has siva clothing shop text', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    const shopName = screen.getByText('Siva Clothing Shop');
    expect(shopName).toBeInTheDocument();
  });

  it('has menulist component', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>
    );
    expect(screen.getByTestId('menuListComponent')).toBeInTheDocument();
  });
});
