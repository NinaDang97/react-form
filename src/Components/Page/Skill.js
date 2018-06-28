import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Skill extends Component {
    state = {
        design: '',
        location: [],
    }

    componentDidMount() {
        const {design, location} = this.props.skill;
        if(location !== undefined)
        {
            this.setState({
                design, 
                location: [...location]
            })
        }        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.id
        })
    }

    handleCheck = (event) => {
        const val = event.target.id;
        const location = [...this.state.location];
        const index = location.indexOf(val);
        if(index !== -1)
        {
            this.setState({
                location: [...location.slice(0, index), ...location.slice(index + 1, location.length)]
            })
        } else {
            this.setState({
                location: [...this.state.location, val]
            })            
        }
    }

    validateSkill = (design, location) => {
        const errors = {
            design: design !== ''
            ? ''
            : 'Please select one option',
            location: location !== undefined && location.length > 0
            ? ''
            : 'Please select at least one option'
        }
        return errors;
    }

    render(){
        const {design, location} = this.state;
        const errors = this.validateSkill(design, location);
        return (
            <div className="skill-location">
                <h3>2. Skills and location</h3>
                <p>Which is your primary design discipline?*</p>
                    
                <div className="info top">
                    <input type="radio" name="design" id="design-research" onChange={this.handleChange} checked={design === "design-research"} /><label htmlFor="design-research">Design Research</label>
                    
                    <input type="radio" name="design" id="visual-design" onChange={this.handleChange} checked={design === "visual-design"} /><label htmlFor="visual-design">Visual Design</label>
                    
                    <input type="radio" name="design" id="ux-design" onChange={this.handleChange} checked={design === "ux-design"} /><label htmlFor="ux-design">UX Design</label>
                    
                    <input type="radio" name="design" id="frontend-dev" onChange={this.handleChange} checked={design === "frontend-dev"} /><label htmlFor="frontend-dev">Frontend Dev</label>
                </div>
                <div className="bottom">
                    <div className="info right">
                        <p>Do you have experience with any other disciplines?</p>

                        <label htmlFor="o1"><input type="checkbox" name="other" id="o1" /><span className="checkbox"></span>Visual Design</label>
                        <label htmlFor="o2"><input type="checkbox" name="other" id="o2" required /><span className="checkbox"></span>UX Design</label>
                        <label htmlFor="o3"><input type="checkbox" name="other" id="o3" /><span className="checkbox"></span>Front-end Development</label>
                    </div>
                    <div className="info left">
                        <p>Where are you interested in working?*</p>
                        <p className="paragraph-blur">You musy be legally authorized to work without visa sponsorship in the location(s) you choose.</p>
                        
                        <label htmlFor="o01"><input type="checkbox" name="location" id="o01" onChange={this.handleCheck} checked={location.includes("o01")} /><span className="checkbox"></span>Austin, Texas</label>
                        <label htmlFor="o02"><input type="checkbox" name="location" id="o02" onChange={this.handleCheck} checked={location.includes("o02")} /><span className="checkbox"></span>New york, New York</label>
                        <label htmlFor="o03"><input type="checkbox" name="location" id="o03" onChange={this.handleCheck}  checked={location.includes("o03")} /><span className="checkbox"></span>Toronto, Canada</label>
                        <label htmlFor="o04"><input type="checkbox" name="location" id="o04" onChange={this.handleCheck} checked={location.includes("o04")} /><span className="checkbox"></span>Shanghai, Canada</label>
                        <label htmlFor="o05"><input type="checkbox" name="location" id="o05" onChange={this.handleCheck} checked={location.includes("o05")} /><span className="checkbox"></span>Dublin, Ireland</label>
                        <label htmlFor="o06"><input type="checkbox" name="location" id="o06" onChange={this.handleCheck} checked={location.includes("o06")} /><span className="checkbox"></span>Hursley, United Kingdom</label>
                        <label htmlFor="o07"><input type="checkbox" name="location" id="o07" onChange={this.handleCheck} checked={location.includes("o07")} /><span className="checkbox"></span>Boeblingen, Germany</label>
                        <label htmlFor="o08"><input type="checkbox" name="location" id="o08" onChange={this.handleCheck} checked={location.includes("o08")} /><span className="checkbox"></span>Somewhere else</label>
                    </div>
                </div>
                <div>
                    <Link to='/portfolio'>
                        <button
                            name='skill'
                            disabled={this.props.handleDisabled(errors)} onClick={(e) => this.props.onNext(this.state, e)}>
                        Next
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Skill;