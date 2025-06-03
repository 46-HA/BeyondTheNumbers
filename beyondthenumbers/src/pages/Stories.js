import { useState } from 'react';
import './Stories.css';

import JohnDoe from '../stories/john-doe';
import JaneDoe from '../stories/jane-doe';

const stories = {
  'john-doe': { name: 'John Doe', Component: JohnDoe },
  'jane-doe': { name: 'Jane Doe', Component: JaneDoe },
};

const Stories = () => {
  const [active, setActive] = useState(null);

  const toggleStory = (key) => {
    setActive(active === key ? null : key);
  };

  return (
    <div className="stories-container">
      <h2 className="title">Voices We Remember</h2>
      <div className="story-buttons">
        {Object.entries(stories).map(([key, { name }]) => (
          <button
            key={key}
            className={`story-btn ${active === key ? 'active' : ''}`}
            onClick={() => toggleStory(key)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="story-display">
        {active && (
          <div className="story-fade">
            {(() => {
              const StoryComponent = stories[active].Component;
              return <StoryComponent />;
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;
