import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SortByCountry = () => {
  const { sortByCountry } = useParams();
  console.log(sortByCountry);
  useEffect(() => {
    fetch(`http://localhost:5000/sortByCountry/${sortByCountry}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>SortByCountry</div>;
};
export default SortByCountry;
