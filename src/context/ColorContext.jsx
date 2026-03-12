import { createContext } from "react";
import { useState } from "react";

export const ColorContext = createContext(null);

export const ColorProvider = ({children}) => {
    const [color, setColor] = useState("#FFEE8C");
    const changeColor = (newColor) => setColor(newColor);
    return (
        <ColorContext.Provider value={{color, changeColor}}>
            {children}
        </ColorContext.Provider>
    );
};