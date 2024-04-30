import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyList = () => {
  const { user } = useAuth();
  const [touristSpot, setTouristSpot] = useState();
  const [control, setControl] = useState(false);
  console.log(touristSpot);

  //-----------------show data by user mail --------->//
  useEffect(() => {
    fetch(
      `https://tourism-assignment-server-lilac.vercel.app/myList/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setTouristSpot(data));
  }, [user, control]);

  //------------ delete data by user id--------->
  const handleDeleteTourSpot = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://tourism-assignment-server-lilac.vercel.app/delete/${_id}`,
          {
            method: 'DELETE',
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setControl(!control);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your tour spot has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
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
                    <button
                      onClick={() => handleDeleteTourSpot(userTouristSpot._id)}
                      className='w-36 btn btn-error text-white'
                    >
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
