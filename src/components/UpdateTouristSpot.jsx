import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const UpdateTouristSpot = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const [updateTourSpot, setUpdateTourSpot] = useState({});
  //   console.log(updateTourSpot);

  const handleUpdateTouristSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const country_Name = form.country_Name.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const imageURL = form.imageURL.value;

    const updateTouristSpot = {
      country_Name,
      tourists_spot_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      imageURL,
    };
    console.log(updateTouristSpot);

    fetch('http://localhost:5000/addTouristsSpot', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updateTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          alert('data added');
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/updateTouristSpot/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateTourSpot(data));
  }, [id]);

  return (
    <form
      onSubmit={handleUpdateTouristSpot}
      className='form-control w-full max-w-[450px] mx-auto'
    >
      <div className='flex justify-between'>
        <div>
          <div className='label'>
            <span className='label-text'>User Name</span>
          </div>
          <input
            value={user?.displayName}
            readOnly
            required
            name='userName'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div>
          <div className='label'>
            <span className='label-text'>User Email</span>
          </div>
          <input
            value={user?.email}
            readOnly
            required
            name='email'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
      </div>

      <div className='flex justify-between'>
        <div>
          <div className='label'>
            <span className='label-text'>country Name</span>
          </div>

          <select
            className=' border rounded-r-md h-12 w-52'
            name='country_Name'
            id='cars'
            required
          >
            <option value='Bangladesh'>Bangladesh</option>
            <option value='Thailand'>Thailand</option>
            <option value='Indonesia'>Indonesia</option>
            <option value='Malaysia'>Malaysia</option>
            <option value='Vietnam'>Vietnam</option>
            <option value='Cambodia'>Cambodia</option>
          </select>
        </div>

        <div>
          <div className='label'>
            <span className='label-text'>tourists_spot_name</span>
          </div>
          <input
            defaultValue={updateTourSpot.tourists_spot_name}
            required
            name='tourists_spot_name'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <div className='label'>
            <span className='label-text'>location</span>
          </div>
          <input
            defaultValue={updateTourSpot.location}
            required
            name='location'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div>
          <div className='label'>
            <span className='label-text'>short description</span>
          </div>
          <input
            defaultValue={updateTourSpot.short_description}
            required
            name='short_description'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <div className='label'>
            <span className='label-text'>Average cost</span>
          </div>
          <input
            defaultValue={updateTourSpot.average_cost}
            required
            name='average_cost'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div>
          <div className='label'>
            <span className='label-text'>seasonality(e.g: summer, winter)</span>
          </div>
          <input
            defaultValue={updateTourSpot.seasonality}
            required
            name='seasonality'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <div className='label'>
            <span className='label-text'> Travel time</span>
          </div>
          <input
            defaultValue={updateTourSpot.travel_time}
            required
            name='travel_time'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div>
          <div className='label'>
            <span className='label-text'> total Visitors Per Year</span>
          </div>
          <input
            defaultValue={updateTourSpot.totalVisitorsPerYear}
            required
            name='totalVisitorsPerYear'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
      </div>

      <div className='flex justify-between'>
        <div>
          <div className='label'>
            <span className='label-text'>image URL</span>
          </div>
          <input
            defaultValue={updateTourSpot.imageURL}
            required
            name='imageURL'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-[449px]'
          />
        </div>
      </div>
      <input className='btn btn-accent mt-6' value='Update' />
    </form>
  );
};

export default UpdateTouristSpot;
