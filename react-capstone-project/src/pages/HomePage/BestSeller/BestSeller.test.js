import { screen, render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import BestSeller from './BestSeller';

describe('BestSeller', () => {
  it('free shipping & return text ', () => {
    render(
      <HashRouter>
        <BestSeller />
      </HashRouter>
    );
    const shippingText = screen.getByText('FREE SHIPPING & RETURN');
    expect(shippingText).toBeInTheDocument();
  });

  it('Free shipping on all orders over Rs.499 text', () => {
    render(
      <HashRouter>
        <BestSeller />
      </HashRouter>
    );
    const freeShippingText = screen.getByText('Free shipping on all orders over Rs.499');
    expect(freeShippingText).toBeInTheDocument();
  });

  it('money back text ', () => {
    render(
      <HashRouter>
        <BestSeller />
      </HashRouter>
    );
    const moneyBackText = screen.getByText('MONEY BACK GUARANTEE');
    expect(moneyBackText).toBeInTheDocument();
  });

  it('guarantee text', () => {
    render(
      <HashRouter>
        <BestSeller />
      </HashRouter>
    );
    const guaranteeText = screen.getByText('100% money back guarantee');
    expect(guaranteeText).toBeInTheDocument();
  });

  it('online support text', () => {
    render(
      <HashRouter>
        <BestSeller />
      </HashRouter>
    );
    const onlineSupport = screen.getByText('ONLINE SUPPORT 24/7');
    expect(onlineSupport).toBeInTheDocument();
  });

  it('reach us out at anytime text', () => {
    render(
      <HashRouter>
        <BestSeller />
      </HashRouter>
    );
    const reactUsText = screen.getByText('Reach us out at anytime');
    expect(reactUsText).toBeInTheDocument();
  });

  it('add to cart text', () => {
    render(
      <HashRouter>
        <BestSeller />
      </HashRouter>
    );
    const addToCartText = screen.getByText('Reach us out at anytime');
    expect(addToCartText).toBeInTheDocument();
  });

  it('has see more button', () => {
    render(
      <HashRouter>
        <BestSeller />
      </HashRouter>
    );
    expect(screen.getByTestId('seeMoreBtn')).toBeInTheDocument();
  });
});
