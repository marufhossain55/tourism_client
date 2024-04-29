import { useLoaderData } from 'react-router-dom';
import TouristSpotCards from './TouristSpotCards';

const TouristsSpots = () => {
  const touristsSpots = useLoaderData();
  console.log(touristsSpots);

  return (
    <div className=' container mx-auto grid grid-cols-3 space-y-6'>
      {touristsSpots.slice(0, 6).map((touristsSpot) => (
        <TouristSpotCards
          key={touristsSpot._id}
          touristsSpot={touristsSpot}
        ></TouristSpotCards>
      ))}
    </div>
  );
};
export default TouristsSpots;

// const {
//   _id,
//   average_cost,
//   country_name,
//   email,
//   imageURL,
//   location,
//   seasonality,
//   short_description,
//   tourists_spot_name,
//   travel_time,
//   total_visitors_per_year,
// } = touristsSpots;
