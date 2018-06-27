import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
    <div className="header">
        <h1>Let's talk</h1>
        <p>Think you have what it takes? Show us.</p>
        <Link to='/info'><button>Try Now</button></Link>
    </div>
)

export default Home;