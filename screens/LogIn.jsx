import {View, Text, Alert} from "react-native";
import AuthContent from "../AuthContent/AuthContent";
import { logIn } from "../utils/http";
import Loading from "../UI/Loading";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../store/AuthContext";

function LogIn() {

  let [isLoading, setIsLoading] = useState(false);
  let {authenticate} = useContext(AuthContext);

  const loginHandler = async ({email, password}) => {

    setIsLoading(true);

    try {

      let token = await logIn(email, password);

      authenticate(token);


    } catch (error) {

      Alert.alert("Sign In Fail", "Please check your inputs!");
      setIsLoading(false);
    }

  };
  

  return (
    <AuthContent isLogin={true} onAuthenticate={loginHandler}/>
  )
}

export default LogIn