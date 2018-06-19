import React from 'react';

const Information = () => (
    <div className="personal-info">
        <h3>Personal Information</h3>
        <div className="info info-col-01">
            <div className="left">
                <input type="text" placeholder="Full name*" />
                <input type="email" placeholder="Email*" />            
                <input type="tel" placeholder="Phone#*" />
            </div>
            <div className="right">
                <input type="email" placeholder="Re-enter email*" />
            </div>
        </div>
        <div className="info info-col-02">
            <div className="top">
                <textarea className="input" rows="2" placeholder="Address*"></textarea>   
            </div>       
            <div className="bottom-inline">
                <input type="text" placeholder="City*" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Country/Region*" />
                <input type="text" placeholder="Zip/Postal code" />
            </div>
        </div>
        <div className="info info-col-3">
            <input type="text" placeholder="How did you hear about us" />
        </div>
    </div>
)

export default Information;