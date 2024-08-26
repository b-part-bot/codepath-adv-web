import { useState, useEffect } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import '../css/ShowCreators.css';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from('creators')
        .select('*');

      if (error) {
        console.error('Creators could not be fetched at the moment.', error);
      } else {
        setCreators(data);
      }
    }

    fetchCreators();
  }, []);

  return (
    <div className="show-creators-page">
      <div className="creators-grid">
        {creators.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}

export default ShowCreators;
