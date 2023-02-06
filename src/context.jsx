import React, { useContext, useState } from "react";
<<<<<<< HEAD
import { USERS } from "./constants";
=======
>>>>>>> 6917f242288cd0612879386ac1e592f6989a4d80

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [language, setLanguage] = useState(0); //0 - English 1 - Polish
<<<<<<< HEAD
    const [numberOfOnline, setNumberOfOnline] = useState(0);

    const countOnlineUsers = () => {
        const onlineUsers = USERS.filter((user) => user.status != 0);
        console.log('asdadsdsa');
        return onlineUsers.length;
    }
=======
>>>>>>> 6917f242288cd0612879386ac1e592f6989a4d80

    const data = {
        language
    }

<<<<<<< HEAD
    const functions = {
        countOnlineUsers
    }

    return <AppContext.Provider value={{data, functions}}>
=======
    return <AppContext.Provider value={{data}}>
>>>>>>> 6917f242288cd0612879386ac1e592f6989a4d80
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
