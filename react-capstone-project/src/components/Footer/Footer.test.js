import { screen, render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Footer from './Footer';

describe('Footer', () => {
  it('it has facebook icon', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('facebookIcon')).toBeInTheDocument();
  });
  it('it has twitter icon', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('twitterIcon')).toBeInTheDocument();
  });
  it('it has google icon', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('googleIcon')).toBeInTheDocument();
  });
  it('it has instagram icon', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('instagramIcon')).toBeInTheDocument();
  });
  it('it has whatsapp icon', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('whatsappIcon')).toBeInTheDocument();
  });
  it('it has telegram icon', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    expect(screen.getByTestId('telegramIcon')).toBeInTheDocument();
  });

  it('has Copyright text', () => {
    render(
      <HashRouter>
        <Footer />
      </HashRouter>
    );
    const copyrightText = screen.getByText('© Copyright 2023 | Siva Clothing Shop');
    expect(copyrightText).toBeInTheDocument();
  });
});
