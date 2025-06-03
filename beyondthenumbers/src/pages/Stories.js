import { Link } from 'react-router-dom';

const Stories = () => {
  const storyFiles = import.meta.glob('../stories/*.js', { eager: true });

  return (
    <div>
      <h2>Stories</h2>
      <div>
        {Object.keys(storyFiles).map((filePath) => {
          const fileName = filePath.split('/').pop().replace('.js', '');
          const StoryComponent = storyFiles[filePath].default;
          return (
            <div key={fileName}>
              <Link to={`/story/${fileName}`}>
                <StoryComponent />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;