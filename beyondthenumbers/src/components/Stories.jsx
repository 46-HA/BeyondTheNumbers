import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Stories.css';

const stories = [
    { name: '1'},
    { name: "2"},
    { name: "3"},
    { name: "4"},
    { name: "5"},
    { name: "6"},
];

const Stories = () => {
    return (
        <div className="stories">
            <h2>A short story about the lost lives in 9/11</h2>
            <ul>
                {stories.map((story) => (
                    <li key={story.name}>
                        <Link to={`/story/${story.name.toLowerCase().replace(/ /g, '-')}`}>
                        {story.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stories;