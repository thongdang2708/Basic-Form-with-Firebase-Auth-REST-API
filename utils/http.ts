
import axios from "axios";

const WEB_API_KEY = "AIzaSyCofJSOLpy4te_7KudKNLxP3DLdUHzjKi4";


//Common function for authentication

const authentication = async (mode : string, email : string, password : string) => {

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${WEB_API_KEY}`;

    let response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    let token = response.data.idToken;

    return token;
};

//Register user

export const createUser = async (email : string, password : string) => {

    let token = await authentication("signUp", email, password);

    return token;

};

//Log In User

export const logIn = async (email : string, password : string) => {

    let token = await authentication("signInWithPassword", email, password);

    return token;

};