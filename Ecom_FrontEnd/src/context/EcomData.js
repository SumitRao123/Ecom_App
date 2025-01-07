import { createContext } from "react";
import { baseURL } from "../utilities/SaveData";

const context = createContext();
export const  DataProvider = ({ children }) => {
    return (
        <context.Provider value={{ baseURL }}>
            {children}
        </context.Provider>
    );
    }