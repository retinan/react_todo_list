import React from "react";
import './Form.css';

const Form = ({ value, fontColor, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                style={{color:fontColor}}
            />
            <div className="create-btn" onClick={onCreate}> ADD </div>
        </div>
    )
}

export default Form;