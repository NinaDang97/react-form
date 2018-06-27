import React from 'react';

const Textarea = (props) => (
    <textarea 
        className={props.className} 
        rows="2" 
        name={props.name} 
        value={props.value}
        onChange={props.onChange} onBlur={props.onBlur}  
        placeholder={props.placeholder}>
    </textarea>   
) 

export default Textarea;