import React from 'react';
import {
    Link,
  } from 'react-router-dom';

const btnStyle = {
    outline: 'none',
    backgroundColor: 'green',
    color: 'white',
    padding: '15px 25px',
    fontSize: '1.25em'
}

const Home = () => (
    <div className="header">
        <h1>Let's talk</h1>
        <p>Think you have what it takes? Show us.</p>
        <Link to='/info'><button style={btnStyle}>Try Now</button></Link>
    </div>
)

export default Home;