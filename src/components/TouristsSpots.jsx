import { useLoaderData } from 'react-router-dom';
import TouristSpotCards from './TouristSpotCards';
import { Typewriter } from 'react-simple-typewriter';

const TouristsSpots = () => {
  const touristsSpots = useLoaderData();
  // console.log(touristsSpots);

  return (
    <div className=' mt-20'>
      <div className='flex gap-3 justify-center font-bold text-4xl'>
        <h1 className=''>Discover </h1>
        <Typewriter
          words={['Lands', 'Places', 'Travel']}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className=' container mx-auto grid lg:grid-cols-3 md:grid grid-cols-2 space-y-6 mt-20'>
        {touristsSpots.slice(0, 6).map((touristsSpot) => (
          <TouristSpotCards
            key={touristsSpot._id}
            touristsSpot={touristsSpot}
          ></TouristSpotCards>
        ))}
      </div>
    </div>
  );
};
export default TouristsSpots;
