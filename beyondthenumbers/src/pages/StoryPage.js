import { useParams } from 'react-router-dom';
import GordonAamothj from '../stories/gordonaamoth.js';
import JaneDoe from '../stories/jane-doe';
import './StoryPage.css';

const storyComponents = {
  'gordonaamoth': GordonAamothj,
  'jane-doe': JaneDoe,
};

const storyTitles = {
  'gordonaamoth': 'Gordon Aamoth',
  'jane-doe': 'Jane Doe',
};

const StoryPage = () => {
  const { id } = useParams();
  const StoryComponent = storyComponents[id];
  const title = storyTitles[id];

  return (
    <div className="story-page-container">
      {StoryComponent ? (
        <>
          <h2 className="story-title">{title}</h2>
          <StoryComponent />
        </>
      ) : (
        <p>Story not found.</p>
      )}
    </div>
  );
};

export default StoryPage;
