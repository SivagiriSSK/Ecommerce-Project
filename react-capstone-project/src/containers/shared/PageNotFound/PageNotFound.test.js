import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';

describe('PageNotFound', () => {
  it('has page not found text', () => {
    render(
      <HashRouter>
        <PageNotFound />
      </HashRouter>
    );
    const pageNotFoundText = screen.getByText('404 Page Not Found.Try again later!');
    expect(pageNotFoundText).toBeInTheDocument();
  });
  it('Back to home page', () => {
    render(
      <HashRouter>
        <PageNotFound />
      </HashRouter>
    );
    const pageNotFoundText = screen.getByText(' Back to home page');
    expect(pageNotFoundText).toBeInTheDocument();
  });
});
