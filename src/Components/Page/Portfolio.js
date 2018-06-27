import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div className="portfolio">
        <h3>3. Portfolio</h3>
        <p>Prove you're IBM's next great designer by showing us who you are. What you've done. How you work. Tell us your story.</p>
        <input type="text" placeholder="Portfolio link" />
        <textarea rows="5" placeholder="Anything else (another link, availability, etc.)?"></textarea>
        <Link to='/'><button type="submit">Submit</button></Link>
    </div>
)

export default Portfolio;