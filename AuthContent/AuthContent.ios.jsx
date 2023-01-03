import {View, Text, StyleSheet, Alert, Platform} from "react-native";
import Colors from "../constants/styles";
import FlatButton from "../UI/FlatButton";
import { useState } from "react/cjs/react.development";
import AuthForm from "./AuthForm";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { TextInput } from "react-native";
import Button from "../UI/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


function AuthContent({isLogin, onAuthenticate, style}) {
  
  let [credentialIsValid, setCredentialIsValid] = useState({
    emailIsValid: true,
    passwordIsValid: true,
    emailsAreEqual: true,
    passwordsAreEqual: true
  });  

let navigation = useNavigation();

  const onSubmit = (userInputs) => {

    let {email, password, confirmEmail, confirmPassword} = userInputs;

    let emailIsValidCheck = email.trim().length > 0 && email.trim().includes("@");
    let passwordIsValidCheck = password.trim().length > 5;
    let emailsAreEqualCheck = email === confirmEmail && confirmEmail.trim().length > 0;
    let passwordsAreEqualCheck = password === confirmPassword && confirmPassword.trim().length > 0;

    if (emailIsValidCheck === false || passwordIsValidCheck === false || (isLogin === false && (emailsAreEqualCheck === false || passwordsAreEqualCheck === false))) {

        Alert.alert("Invalid inputs", "Please check your inputs again!");
        setCredentialIsValid((credentialIsValid) => {
            return {
                emailIsValid: emailIsValidCheck,
                passwordIsValid: passwordIsValidCheck,
                emailsAreEqual: emailsAreEqualCheck,
                passwordsAreEqual: passwordsAreEqualCheck
            }
        });
        return;
    }

    onAuthenticate({email, password});
 
    
    
    // setCredentialIsValid((credentialIsValid) => {
    //     return {
    //         emailIsValid: true,
    //         passwordIsValid: true,
    //         emailsAreEqual: true,
    //         passwordsAreEqual: true
    //     }
    // });
    
 
  }
  
  const handleMove = () => {

    if (isLogin) {
        navigation.replace("Register");
    } else {
        navigation.replace("LogIn");
    }
  }
  let formIsValid = credentialIsValid.emailIsValid === false || credentialIsValid.passwordIsValid === false || (isLogin === false && (credentialIsValid.emailsAreEqual === false || credentialIsValid.passwordsAreEqual === false));
  
  return (
    <KeyboardAwareScrollView style={styles.screen} extraHeight={20}>
            <Text style={styles.textTitle}> Title </Text> 
            <AuthForm isLogin={isLogin} credentialIsValid={credentialIsValid} onSubmit={onSubmit}/>
    </KeyboardAwareScrollView>
  )
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Colors.primary100
    },
    authContentContainer: {
        flex: 1,
        padding: 24,
        
    },
    textTitle: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    },
    textTitle: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 14,
        fontWeight: "bold"
    }
});


export default AuthContent
  