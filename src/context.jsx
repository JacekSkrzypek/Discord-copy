import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [language, setLanguage] = useState(0); //0 - English 1 - Polish

    const data = {
        language
    }

    return <AppContext.Provider value={{data}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    const context = useContext(AppContext);
    if(context === undefined) {
        throw new Error('useContext must be use in appProvider')
    }
    return context
}

export default { AppContext, AppProvider };
