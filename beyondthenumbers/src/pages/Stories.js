import { Link } from 'react-router-dom';
import './Stories.css';

const stories = {
  'john-doe': 'John Doe',
  'jane-doe': 'Jane Doe',
};

const Stories = () => {
  return (
    <div className="stories-container">
      <h2 className="title">Voices We Remember</h2>
      <div className="story-buttons">
        {Object.entries(stories).map(([key, name]) => (
          <Link key={key} to={`/pages/${key}`}>
            <button className="story-btn">{name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stories;
