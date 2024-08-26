import { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/EditCreator.css'; // Reuse the same CSS file

function AddCreator() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); // Initialize the navigate hook

  async function handleSubmit(event) {
    event.preventDefault();
    const { data, error } = await supabase.from('creators').insert([{ name, url, description }]);

    if (error) {
      console.error('Creator could not be added', error);
    } else {
      console.log('Creator was successfully added', data);
      navigate('/'); // Redirect to the "View Creators" page after success
    }
  }

  return (
    <form className="edit-creator-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Enter the creator's name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="url">Website URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="form-control"
          placeholder="Enter the creator's website URL"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="Enter a brief description"
        />
      </div>

      <div className="button-group">
        <button type="submit" className="btn-primary">Add Creator</button>
      </div>
    </form>
  );
}

export default AddCreator;
