import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error retrieving data', error);
      } else {
        setCreator(data);
      }
    }

    fetchCreator();
  }, [id]);

  return (
    <div>
      {creator && <CreatorCard creator={creator} />}
    </div>
  )
}

export default ViewCreator;