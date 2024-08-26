import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import '../css/ViewCreator.css';

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

  if (!creator) {
    return <div className="loading">Loading creator details...</div>;
  }

  return (
    <div className="view-creator-page">
      <div className="creator-card">
        <img className="creator-image" src={creator.imageURL} alt={creator.name} />
        <div className="creator-details">
          <h1 className="creator-name">{creator.name}</h1>
          <p className="creator-description">{creator.description}</p>
          {creator.url && (
            <a href={creator.url} className="creator-url" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewCreator;
