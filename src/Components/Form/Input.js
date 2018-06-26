import React from 'react';

const Input = (props) => (
    <input 
        type={props.type} 
        className={props.className} 
        name={props.name} 
        onChange={props.onChange} 
        onBlur={props.onBlur} 
        placeholder={props.placeholder}
    />
)
export default Input; 