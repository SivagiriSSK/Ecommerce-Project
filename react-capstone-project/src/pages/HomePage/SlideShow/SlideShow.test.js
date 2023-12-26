import { screen, render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import SlideShow from './SlideShow';

describe('BestSeller', () => {
  it('has same day delivery text', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    const sameDayText = screen.getByText('Same Day Delivery!');
    expect(sameDayText).toBeInTheDocument();
  });

  it('has same day delivery text', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    const sameDayText = screen.getByText('Same Day Delivery!');
    expect(sameDayText).toBeInTheDocument();
  });

  it('has offer information text', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    const offerInfoText = screen.getByText(
      'There are Plenty of Sales in the Sea, But This One is a Real Treasure'
    );
    expect(offerInfoText).toBeInTheDocument();
  });

  it('has browse product button', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    expect(screen.getByTestId('browseProductBtn')).toBeInTheDocument();
  });

  it('has UP TO 50% OFF text', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    const offerText = screen.getByText('UP TO 50% OFF');
    expect(offerText).toBeInTheDocument();
  });

  it('has biggest deals offer information text', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    const offerInfoText = screen.getByText('BIGGEST DEALS ON TOP BRANDS YOU CAN SAVE UP TO 50%');
    expect(offerInfoText).toBeInTheDocument();
  });

  it('has get offer button', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    expect(screen.getByTestId('getOfferBtn')).toBeInTheDocument();
  });

  it('has summer sale text', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    const offerText = screen.getByText('SUMMER SALE');
    expect(offerText).toBeInTheDocument();
  });

  it('has cashback offer information', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    const offerInfoText = screen.getByText(
      'Cashback* When you purchase Louis Philippe Brand Shirt'
    );
    expect(offerInfoText).toBeInTheDocument();
  });

  it('has cashback button', () => {
    render(
      <HashRouter>
        <SlideShow />
      </HashRouter>
    );
    expect(screen.getByTestId('cashbackBtn')).toBeInTheDocument();
  });
});
