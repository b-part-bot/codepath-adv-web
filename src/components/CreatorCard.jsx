import { useNavigate } from 'react-router-dom';
import '../css/App1.css'
function CreatorCard({ creator }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/view/${creator.id}`);
  };

  const goToEdit = () => {
    navigate(`/edit/${creator.id}`);
  };

  return (
    <div className="creator-card p-4 shadow-lg rounded-lg flex flex-col">
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} className="rounded-full w-24 h-24 object-cover mb-4" />}
      <h4 className="text-lg font-bold mb-2">{creator.name}</h4>
      <p className="text-gray-600 mb-4">{creator.description}</p>
      
      <div className="button-group mt-auto">
        <button
          type="button"
          onClick={goToDetails}
          className="btn btn-details"
        >
          View Details
        </button>
        <button
          type="button"
          onClick={goToEdit}
          className="btn btn-edit"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => window.open(creator.url, '_blank')}
          className="btn btn-visit"
        >
          Visit Website
        </button>
      </div>
    </div>
  );
  
  
  

  
  
  
  
}

export default CreatorCard;
