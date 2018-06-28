import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
    state = {
        link: '',
        anythingElse: '',
    }

    componentDidMount() {
        this.setState(prevState => ({
            ...prevState,
            ...this.props.portfolio
        }))
    }
    
    handleChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validatePortfolio = (link) => {
        const regexLink = /^\w+\.[a-z]{2,5}$/;
        const errors = {
            link: regexLink.test(link)
            ? ''
            : 'Invalid Link'
        }
        return errors;
    }

    render(){
        const {link, anythingElse} = this.state;
        const errors = this.validatePortfolio(link);
        return (
                <div className="portfolio">
                    <h3>3. Portfolio</h3>
                    <p>Prove you're IBM's next great designer by showing us who you are. What you've done. How you work. Tell us your story.</p>
                    <input name='link' value={link} onChange={this.handleChange} type="url" placeholder="Portfolio link" />
                    <textarea rows="5" name='anythingElse' value={anythingElse} onChange={this.handleChange} placeholder="Anything else (another link, availability, etc.)?"></textarea>
                    <Link to='/'>
                        <button
                            type='button' 
                            name='portfolio'
                            disabled={this.props.handleDisabled(errors)}
                            onClick={(e) => this.props.submit(this.state, e)}
                        >
                            Submit
                        </button>
                    </Link>
                </div>
        )
    }
}

export default Portfolio;