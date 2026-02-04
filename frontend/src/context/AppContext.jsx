import { createContext } from "react";
import { assets, info_list } from "../assets/assets";

export const AppContext = createContext()

//Context to access the below from any components
const AppContextProvider = (props) => {

    const value = {
        info_list
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider