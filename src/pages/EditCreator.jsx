import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import '../EditCreator.css';  

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({ name: '', description: '', imageURL: '', url: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;

        setCreator(data);
      } catch (error) {
        setError("Couldn't get the creator, sorry!");
        console.log('Fetch error:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prevCreator) => ({ ...prevCreator, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('creators')
        .update(creator)
        .eq('id', id);

      if (error) throw error;

      navigate('/');
    } catch (error) {
      setError("Couldn't update the creator!");
      console.log('Update error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this creator?")) {
      setLoading(true);

      try {
        const { error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id);

        if (error) throw error;

        navigate('/');
      } catch (error) {
        setError("Couldn't delete the creator!");
        console.log('Delete error:', error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) return <div className="loading">Hang tight, loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <form className="edit-creator-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={creator.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={creator.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageURL">Image URL:</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="url">Website URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={creator.url}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="button-group">
        <button type="submit" className="btn-primary" disabled={loading}>Submit</button>
        <button type="button" className="btn-danger" onClick={handleDelete}>Delete</button>
        <button type="button" className="btn-secondary" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </form>
  );
}

export default EditCreator;
