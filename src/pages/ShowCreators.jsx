import {useState, useEffect} from 'react';
import {supabase} from '../client';
import CreatorCard from '../components/CreatorCard';

function ShowCreators() {

  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const {data, error} = await supabase
        .from('creators')
        .select('*');

      if (error) {
        console.error('Creators could not be fetched at the moment.', error);
      } else {
        setCreators(data);
      }

    }

    fetchCreators();

  },[]);

  return (
    <div>
      {creators.map(creator =>
        <CreatorCard key={creator.id} creator={creator} />
        )}
    </div>
  );
}

export default ShowCreators;