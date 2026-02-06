import { createContext } from "react";
import { assets, service_list } from "../assets/assets";

export const AppContext = createContext()

//Context to access the below from any components
const AppContextProvider = (props) => {

    const ccySymbol = '€'

    const value = {
        service_list, 
        ccySymbol
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider