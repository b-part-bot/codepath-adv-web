import { useNavigate } from 'react-router-dom';

function CreatorCard({ creator }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/view/${creator.id}`);
  };

  const goToEdit = () => {
    navigate(`/edit/${creator.id}`);
  };

  return (
    <div className="creator-card">
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <h4>{creator.name}</h4>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
      <br />
      <button onClick={goToDetails}>View Details</button>
      <button onClick={goToEdit}>Edit</button>
    </div>
  );
}

export default CreatorCard;
