import {View, Text, Alert} from "react-native";
import AuthContent from "../AuthContent/AuthContent";
import { useState } from "react";
import { createUser } from "../utils/http";
import Loading from "../UI/Loading";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { TextInput } from "react-native";
function Register() {

  let [isLoading, setIsLoading] = useState(false);
  let navigation = useNavigation();

  const signupHandler = async ({email, password}) => {

    setIsLoading(true);

    try {

    await createUser(email, password);

    navigation.replace("LogIn");

    } catch (error) {
      Alert.alert("Sign up fail", "Please check your inputs");
      setIsLoading(false);
    }

  };

  if (isLoading) {
    return <Loading message={"Creating user...!"}/>
  }
  
  return (
  
    
    
    <AuthContent style={styles.screen} isLogin={false} onAuthenticate={signupHandler}/>
   
    
   
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Register