import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';

const MyList = () => {
  const { user } = useAuth();
  const [touristSpot, setTouristSpot] = useState();
  // console.log(touristSpot);

  //-----------------show data by user mail --------->//
  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTouristSpot(data));
  }, [user]);

  //------------ update data by user id--------->

  //----------------------------------------->
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
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <Link to={`/updateTouristSpot/${userTouristSpot._id}`}>
                      <button className='btn btn-secondary text-white w-36'>
                        Update
                      </button>
                    </Link>
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
