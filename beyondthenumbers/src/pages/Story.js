import { useParams } from 'react-router-dom';

const Story = () => {
    const { name } = useParams();
    const StoryComponent = require(`../stories${name}.js`).default;

    return(
        <div>
      <h2>{name.replace('-', ' ')}</h2>
      <StoryComponent />
        </div>
    );
};

export default Story;