import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

const MyList = () => {
  const { user } = useAuth();
  const [touristSpot, setTouristSpot] = useState();
  console.log(touristSpot);
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTouristSpot(data));
  }, [user]);
  return (
    <div className='container mx-auto w-[60%]'>
      {touristSpot?.map((userTouristSpot, idx) => (
        <div key={userTouristSpot._id}>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}

              <tbody>
                {/* row 1 */}
                <tr>
                  <th>{idx + 1}</th>
                  <td className='w-36'>{userTouristSpot.country_name}</td>
                  <td className='w-36'>{userTouristSpot.location}</td>
                  <td className='w-36'>{userTouristSpot.tourists_spot_name}</td>
                  <td className='w-36'>{userTouristSpot.travel_time}</td>
                  <td>
                    <button className='w-36 btn btn-secondary text-white'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button className='w-36 btn btn-error text-white'>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MyList;
