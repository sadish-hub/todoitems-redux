import React from 'react';
import Constants from '../../../store/constants';

const ColorFilters = ({ value = [], onColorChange }) => {
    const getColorsList = () => {
        let colorsList = [];
        const colors = Constants.COLORS;
        for (const key in colors) {
            if (Object.hasOwnProperty.call(colors, key)) {
                colorsList.push(
                    <label key={key} style={{ display: "block" }}>
                        <input type="checkbox" name={key} defaultChecked={value.includes(key)} 
                        onChange={(e) => onColorChange(key, e.target.checked)} />
                        <span className="color-block" style={{ backgroundColor: key }}></span>
                        {colors[key]}
                    </label>
                );
            }
        }
        return colorsList;
    };
    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">
                {getColorsList()}
            </form>
        </div>
    );
};

export default ColorFilters;