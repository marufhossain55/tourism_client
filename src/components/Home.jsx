import Accordion from './Accordion';
import Banner from './Banner';
import Countries from './Countries';
import Review from './Review';
import TouristsSpots from './TouristsSpots';

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <TouristsSpots></TouristsSpots>
        <Countries></Countries>
        <Accordion></Accordion>
        <Review></Review>
      </div>
    </div>
  );
};
export default Home;
