import { Link, useLoaderData } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Countries = () => {
  const countries = useLoaderData();
  console.log(countries);

  return (
    <div className='mt-40'>
      <Fade>
        <h1 className='font-bold text-4xl text-center mb-24'>Countries</h1>
      </Fade>
      <div className='container mx-auto grid lg:grid-cols-3  md:grid-cols-2 cursor-pointer'>
        {countries?.map((country) => (
          <Link key={country._id} to={`/sortByCountry/${country.country_name}`}>
            <div className='max-w-[23rem] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800  '>
              <img
                src={country.imageURL}
                alt={'tourists_spot_name'}
                className='object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500'
              />
              <div className='flex flex-col justify-between p-6 space-y-8'>
                <div className='space-y-2'>
                  <h2 className='text-2xl font-bold tracking-wide border-b-2 pb-2'>
                    {country.country_name}
                  </h2>

                  <div className='text-center border-b-2 pb-4'>
                    {country.short_description}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Countries;
