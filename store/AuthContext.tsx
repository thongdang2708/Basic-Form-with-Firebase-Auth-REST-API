
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import React, { createContext } from "react";


interface ProviderProps {
    children: React.ReactNode
};

type AuthContextType = {
    token: string,
    isAuthenticated: boolean,
    authenticate: (token : string) => void,
    logout: () => void
};

const defaultValues : AuthContextType = {
    token: "",
    isAuthenticated: false,
    authenticate: (token : string) => {},
    logout: () => {}
};

const AuthContext = createContext<AuthContextType>(defaultValues);

export const AuthProvider = ({children} : ProviderProps) => {

    let [authToken, setAuthToken] = useState<string | undefined | null> (undefined);

    const authenticate = (token : string) => {

        setAuthToken(token);
        AsyncStorage.setItem("token", token);
    };

    const logout = () => {
        setAuthToken(null);
        AsyncStorage.removeItem("token");
    };  

    

    return (<AuthContext.Provider value={{
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }}> 
        {children}
    </AuthContext.Provider>)
};
 
export default AuthContext;



















































// import { useState } from "react";
// import React, { createContext, FC } from "react";

// interface ProviderProps {
//     children: React.ReactNode
// }

// type AuthContentType = {
//     token: string,
//     isAuthenticated: boolean,
//     authenticate: (token : string) => void,
//     logout: () => void
// };

// const defaultValues : AuthContentType = {
//     token: "",
//     isAuthenticated: false,
//     authenticate: (token) => {},
//     logout: () => {}
// };

// const AuthContext = createContext<AuthContentType>(defaultValues);

// export const AuthProvider = ({children} : ProviderProps) => {

//     let [authToken, setAuthToken] = useState<string | null | undefined>(undefined);

//     const authenticate = (token : string) => {
//         setAuthToken(token);
//     };

//     const logout = () => {
//         setAuthToken(null);
//     }

//     return (<AuthContext.Provider value={{
//         token: authToken,
//         isAuthenticated: !!authToken,
//         authenticate: authenticate,
//         logout: logout
//     }}>
//         {children}
//     </AuthContext.Provider>)


// };

// export default AuthContext;