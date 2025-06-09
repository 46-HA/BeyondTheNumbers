import { useParams } from 'react-router-dom';
import Gordonmccannelaamothjr from '../stories/gordonmccannelaamothjr';
import JaneDoe from '../stories/jane-doe';
import './StoryPage.css';

const storyComponents = {
  'Gordon McCannel Aamothj Jr.': Gordonmccannelaamothjr,
  'jane-doe': JaneDoe,
};

const StoryPage = () => {
  const { id } = useParams();
  const StoryComponent = storyComponents[id];

  return (
    <div className="story-page-container">
      {StoryComponent ? (
        <>
          <h2 className="story-title">{id.replace(/-/g, ' ')}</h2>
          <StoryComponent />
        </>
      ) : (
        <p>Story not found.</p>
      )}
    </div>
  );
};

export default StoryPage;
