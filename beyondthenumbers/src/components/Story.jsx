import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Story = () => {
    const { name } = useParams();
    const [StoryContent, setStoryContent] = useState(null);

    useEffect(() => {
        import(`../stories/${name}.jsx`)
            .then((module) => setStoryContent(() => module.default))
            .catch((err) => {
                console.error('Story not found:', err);
                setStoryContent(() => () => <p>Story not found.</p>);
            });
    }, [name]);

    return (
        <div className="story">
            {StoryContent ? <StoryContent /> : <p>Loading...</p>}
        </div>
    );
};

export default Story;