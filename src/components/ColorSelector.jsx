import { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

function ColorSelector() {
    const { color, changeColor } = useContext(ColorContext);
    return (
        <div>
            <label htmlFor="color">Cambia de color:</label>
            <input type="color" id="color" value={color} onChange={(e) => changeColor(e.target.value)} />
        </div>
    );
}

export default ColorSelector;