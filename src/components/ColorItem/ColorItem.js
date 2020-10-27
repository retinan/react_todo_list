import React, { Component } from "react";
import './ColorItem.css';

class ColorItem extends Component {


    render() {

        const { id, color, onColorClick } = this.props;
        return (
            <div className="color-button"
                 color={color}
                 style={{backgroundColor: color}}
                 onClick={() => onColorClick(id)}
            >

            </div>
        )
    }
}

export default ColorItem;