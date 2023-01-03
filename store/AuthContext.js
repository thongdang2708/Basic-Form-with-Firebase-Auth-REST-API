
// import { createContext } from "react";
// import { useState } from "react";

// const AuthContext = createContext({
//     token: "",
//     isAuthenticated: false,
//     authenticate: (token) => {},
//     logout: () => {} 
// });

// export const AuthProvider = ({children}) => {

//     let [authToken, setAuthToken] = useState();

//     const authenticate = (token) => {

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