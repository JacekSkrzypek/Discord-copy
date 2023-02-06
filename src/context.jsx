import React, { useContext, useState } from "react";
import { USERS } from "./constants";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [language, setLanguage] = useState(0); //0 - English 1 - Polish
    const [numberOfOnline, setNumberOfOnline] = useState(0);

    const countOnlineUsers = () => {
        const onlineUsers = USERS.filter((user) => user.status != 0);
        console.log('asdadsdsa');
        return onlineUsers.length;
    }

    const data = {
        language
    }

    const functions = {
        countOnlineUsers
    }

    return <AppContext.Provider value={{data, functions}}>
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
