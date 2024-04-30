import { FaHome } from 'react-icons/fa';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { useLoaderData, useParams } from 'react-router-dom';

const TouristSpotDetails = () => {
  const { id } = useParams();
  console.log(id);
  const touristsSpot = useLoaderData();
  console.log(touristsSpot);

  // const singleSingleTouristSpot = touristsSpot.find((spot) => spot._id == id);
  const {
    _id,
    average_cost,
    country_name,
    email,
    imageURL,
    location,
    seasonality,
    short_description,
    tourists_spot_name,
    travel_time,
    total_visitors_per_year,
  } = touristsSpot;
  console.log(touristsSpot);
  return (
    <section className='p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800'>
      <div className='container mx-auto space-y-12'>
        <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
          <img
            src={imageURL}
            alt=''
            className='h-80 dark:bg-gray-500 aspect-video'
          />
          <div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-50'>
            <span className='text-xs uppercase dark:text-gray-600 flex items-center gap-2 pb-2'>
              <FaLocationCrosshairs /> {location}
            </span>
            <span className='text-xs uppercase dark:text-gray-600 flex items-center gap-2 pb-2'>
              <FaHome /> {country_name}
            </span>
            <h3 className='text-3xl font-bold pb-2'>{tourists_spot_name}</h3>
            <p className=' dark:text-gray-600 pb-2'>{short_description}</p>
            <div className='flex justify-around gap-6 mt-3'>
              <div>
                <p className=' dark:text-gray-600 pb-2'>
                  <span className='font-bold'> Spot Name : </span>
                  {tourists_spot_name}
                </p>
                <p className=' dark:text-gray-600 pb-2'>
                  <span className='font-bold'> Travel time : </span>
                  {travel_time}
                </p>
                <p className=' dark:text-gray-600 pb-2'>
                  <span className='font-bold'> Seasonality : </span>
                  {seasonality}
                </p>
              </div>
              <p className=' dark:text-gray-600 pb-2'>
                <span className='font-bold'> Visitors per year : </span>
                {total_visitors_per_year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TouristSpotDetails;
