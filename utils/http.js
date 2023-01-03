
// import axios from "axios";

// const WEB_API_KEY = "AIzaSyCofJSOLpy4te_7KudKNLxP3DLdUHzjKi4";

// //Common function for authentication

// const authentication = async (mode, email, password) => {

//     let url =`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${WEB_API_KEY}`;

//     let response = await axios.post(url, {
//         email: email,
//         password: password,
//         returnSecureToken: true
//     });

//     let token = response.data.idToken;

//     return token;
// }

// //Create user

// export const createUser = async (email, password) => {

//     let token = await authentication("signUp", email, password);

//     return token;

// };

// //Log In

// export const login = async (email, password) => {

//     let token = await authentication("signInWithPassword", email, password);

//     return token;
// }