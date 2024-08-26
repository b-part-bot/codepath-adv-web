import { useRoutes, Link } from 'react-router-dom';

import AddCreators from './pages/AddCreators';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';

import '../src/css/App.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <h1 className="title">Creatorverse</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">View Creators</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Add Creator</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const CreatorCard = ({ name, description, id }) => (
  <div className="creator-card">
    <h3>{name}</h3>
    <p>{description}</p>
    <div className="creator-card-actions">
      <Link to={`/view/${id}`}>View</Link>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  </div>
);

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: 'add', element: <AddCreators /> },
    { path: 'view/:id', element: <ViewCreator /> },
    { path: 'edit/:id', element: <EditCreator /> },
  ]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          {routes}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2024 Creatorverse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
