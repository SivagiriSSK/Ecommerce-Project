import { screen, render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Products from './Products';

describe('Products', () => {
  it('has Categories text ', () => {
    render(
      <HashRouter>
        <Products />
      </HashRouter>
    );
    const categoriesText = screen.getByText('Categories');
    expect(categoriesText).toBeInTheDocument();
  });

  it('has sort by button', () => {
    render(
      <HashRouter>
        <Products />
      </HashRouter>
    );
    expect(screen.getByTestId('sortByBtn')).toBeInTheDocument();
  });

  it('has products found text', () => {
    render(
      <HashRouter>
        <Products />
      </HashRouter>
    );
    expect(screen.getByTestId('productsFoundText')).toBeInTheDocument();
  });

  it('has all category text', () => {
    render(
      <HashRouter>
        <Products />
      </HashRouter>
    );
    const allCategoryText = screen.getByText('All');
    expect(allCategoryText).toBeInTheDocument();
  });

  it('has men category text ', () => {
    render(
      <HashRouter>
        <Products />
      </HashRouter>
    );
    const menCategoryText = screen.getByText('Men');
    expect(menCategoryText).toBeInTheDocument();
  });

  it('has women category text ', () => {
    render(
      <HashRouter>
        <Products />
      </HashRouter>
    );
    const womenCategoryText = screen.getByText('Women');
    expect(womenCategoryText).toBeInTheDocument();
  });

  it('has kids category text ', () => {
    render(
      <HashRouter>
        <Products />
      </HashRouter>
    );
    const kidsCategoryText = screen.getByText('Kids');
    expect(kidsCategoryText).toBeInTheDocument();
  });
});
