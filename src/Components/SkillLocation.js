import React from 'react';
import { Link } from 'react-router-dom';

const SkillLocation = () => (
    <div className="skill-location">
        <h3>2. Skills and location</h3>
        <p>Which is your primary design discipline?*</p>
            
        <div className="info top">
            <input type="radio" name="design-discipline" id="design-research" /><label htmlFor="design-research">Design Research</label>
            
            <input type="radio" name="design-discipline" id="visual-design" /><label htmlFor="visual-design">Visual Design</label>
            
            <input type="radio" name="design-discipline" id="ux-design" /><label htmlFor="ux-design">UX Design</label>
            
            <input type="radio" name="design-discipline" id="frontend-dev" /><label htmlFor="frontend-dev">Frontend Dev</label>
        </div>
        <div className="bottom">
            <div className="info right">
                <p>Do you have experience with any other disciplines?</p>

                <label htmlFor="o1"><input type="checkbox" name="other-discipline" id="o1" /><span className="checkbox"></span>Visual Design</label>
                <label htmlFor="o2"><input type="checkbox" name="other-discipline" id="o2" required /><span className="checkbox"></span>UX Design</label>
                <label htmlFor="o3"><input type="checkbox" name="other-discipline" id="o3" /><span className="checkbox"></span>Front-end Development</label>
            </div>
            <div className="info left">
                <p>Where are you interested in working?*</p>
                <p className="paragraph-blur">You musy be legally authorized to work without visa sponsorship in the location(s) you choose.</p>
                
                <label htmlFor="o01"><input type="checkbox" name="location" id="o01" /><span className="checkbox"></span>Austin, Texas</label>
                <label htmlFor="o02"><input type="checkbox" name="location" id="o02" /><span className="checkbox"></span>New york, New York</label>
                <label htmlFor="o03"><input type="checkbox" name="location" id="o03" /><span className="checkbox"></span>Toronto, Canada</label>
                <label htmlFor="o04"><input type="checkbox" name="location" id="o04" /><span className="checkbox"></span>Shanghai, Canada</label>
                <label htmlFor="o05"><input type="checkbox" name="location" id="o05" /><span className="checkbox"></span>Dublin, Ireland</label>
                <label htmlFor="o06"><input type="checkbox" name="location" id="o06" /><span className="checkbox"></span>Hursley, United Kingdom</label>
                <label htmlFor="o07"><input type="checkbox" name="location" id="o07" /><span className="checkbox"></span>Boeblingen, Germany</label>
                <label htmlFor="o08"><input type="checkbox" name="location" id="o08" /><span className="checkbox"></span>Somewhere else</label>
            </div>
        </div>
        <div>
            <Link to='/portfolio'><button>Next</button></Link>
        </div>
    </div>
)

export default SkillLocation;