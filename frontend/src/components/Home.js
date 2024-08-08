import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Blog App</h1>
            <p>Explore various blogs on different topics.</p>
            <Link to="/blogs">
                <button>View Blogs</button>
            </Link>
        </div>
    );
};

export default Home;
