import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import SlideShow from './SlideShow/SlideShow';
import BestSeller from './BestSeller/BestSeller';

const HomePage = () => {
  return (
    <>
      <HelmetSetup title='Home' />
      <SlideShow></SlideShow>
      <BestSeller></BestSeller>
    </>
  );
};

export default HomePage;
