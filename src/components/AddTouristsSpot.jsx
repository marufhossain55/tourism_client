const AddTouristsSpot = () => {
  const handleAddTouristSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.userName.value;
    const email = form.email.value;
    const country_Name = form.country_Name.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const imageURL = form.imageURL.value;
    console.log(country_Name);
    const addTouristSpot = {
      name,
      email,
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
    form.reset();
    console.log(addTouristSpot);
  };
  return (
    <form
      onSubmit={handleAddTouristSpot}
      className='form-control w-full max-w-[450px] mx-auto border'
    >
      <div className='flex justify-between'>
        <div>
          <div className='label'>
            <span className='label-text'>User Name</span>
          </div>
          <input
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
          {/* <input
            name='country_Name'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-full max-w-xs'
          /> */}
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
            <span className='label-text'>average_cost</span>
          </div>
          <input
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
            required
            name='imageURL'
            type='text'
            placeholder='Type here'
            className='input input-bordered w-[449px]'
          />
        </div>
      </div>
      <button className='btn btn-accent mt-6'>Add</button>
    </form>
  );
};
export default AddTouristsSpot;
