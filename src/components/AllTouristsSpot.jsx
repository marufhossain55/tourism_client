import { IoLocationSharp } from 'react-icons/io5';
import { MdCalendarMonth, MdHomeFilled, MdOutlineSell } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const AllTouristsSpot = () => {
  const allTouristsSpots = useLoaderData();
  console.log(allTouristsSpots);
  return (
    <div className='grid grid-cols-3 space-y-4 container mx-auto'>
      {allTouristsSpots.map((spots) => (
        <div key={spots._id}>
          <div className='max-w-[23rem] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800'>
            <img
              src={spots.imageURL}
              alt={spots.tourists_spot_name}
              className='object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500'
            />
            <div className='flex flex-col justify-between p-6 space-y-8'>
              <div className='space-y-2'>
                <h2 className='text-2xl font-bold tracking-wide border-b-2 pb-2'>
                  {spots.tourists_spot_name}
                </h2>
                <div className='flex justify-between border-b-2 pb-4'>
                  <div>
                    <p className='dark:text-gray-800  font-semibold flex items-center gap-2 '>
                      <MdHomeFilled />
                      {spots.country_name}
                    </p>
                    <p className='dark:text-gray-800 flex items-center gap-2'>
                      <MdOutlineSell />
                      <span className='font-semibold'>cost:</span>
                      {spots.average_cost}
                    </p>
                  </div>
                  <div>
                    <p className='flex items-center gap-2'>
                      <IoLocationSharp />
                      {spots.travel_time}
                    </p>
                    <p className='flex items-center gap-2'>
                      <MdCalendarMonth />
                      {spots.seasonality}
                    </p>
                  </div>
                </div>
                <div className='text-center border-b-2 pb-4'>
                  <span className='font-semibold '>Visitors per year: </span>
                  {spots.total_visitors_per_year}
                </div>
              </div>
              <Link
                to={`/TouristSpotCards/${spots._id}`}
                type='button'
                className=' btn btn-accent flex items-center justify-center w-full   tracking-wide rounded-md  dark:text-white font-bold '
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AllTouristsSpot;
