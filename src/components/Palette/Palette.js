import React, { Component } from "react";
import ColorItem from "../ColorItem/ColorItem";

class Palette extends Component {
    render() {

        const { colors, onColorClick } = this.props;

        const colorList = colors.map((color)=> (
            <ColorItem
                {...color}
                key={color.id}
                onColorClick={onColorClick}
            />
        ));

        return (
            <div className="palette-container" align='center'>
                    {colorList}
            </div>
        )
    }
}

export default Palette;