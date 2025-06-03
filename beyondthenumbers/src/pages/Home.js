import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
    <div className="home">
        <h1>Beyond The Numbers</h1>
        <p>Remembering the lives lost on 9/11</p>
        <p>A summer project by a teenager</p>
        <Link to="/stories">Explore Stories</Link>
    </div>
);

export default Home;