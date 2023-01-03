import {View, Text, StyleSheet} from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { useState } from "react/cjs/react.development";
import Colors from "../constants/styles";
import FlatButton from "../UI/FlatButton";
import { useNavigation } from "@react-navigation/native";

function AuthForm({isLogin, credentialIsValid, onSubmit}) {

  let [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
    confirmEmail: "",
    confirmPassword: ""
  });

  let {emailIsValid, passwordIsValid, emailsAreEqual, passwordsAreEqual} = credentialIsValid;


  const handleChange = (keyIdentifier, enteredValue) => {

    setUserInputs((userInputs) => {
        return {
            ...userInputs,
            [keyIdentifier]: enteredValue
        }
    });

  };

  const handleSubmit = () => {
    
    let allUserInputs = {
        email: userInputs.email,
        password: userInputs.password,
        confirmEmail: userInputs.confirmEmail,
        confirmPassword: userInputs.confirmPassword
    };

    onSubmit(allUserInputs);
    

  };

  let navigation = useNavigation();

  const handleMove = () => {
    if (isLogin) {
        navigation.replace("Register") 
    } else {
        navigation.replace("LogIn");
    }
  };

  
  return (
 
    <View style={styles.form}>
        <Input label={"Email: "} textInputConfig={{
            keyboardType: "email-address",
            autoCapitalize: "none",
            autoCorrect: false,
            placeholder: "Enter your email!",
            value: userInputs.email,
            onChangeText: (enteredValue) => handleChange("email", enteredValue),
        }}
        invalid={emailIsValid === false}
        />
        
        <Input label={"Password: "} textInputConfig={{
            placeholder: "Enter your password",
            secureTextEntry: true,
            value: userInputs.password,
            onChangeText: (enteredValue) => handleChange("password", enteredValue), 
        }}
        invalid={passwordIsValid === false}
        />

        {isLogin === false && (
            <Input label="Confirm your email: " textInputConfig={{
                keyboardType: "email-address",
                autoCapitalize: "none",
                autoCorrect: false,
                placeholder: "Confirm your email",
                value: userInputs.confirmEmail,
                onChangeText: (enteredValue) => handleChange("confirmEmail", enteredValue),
            }}
            invalid={emailsAreEqual === false}
            />
        )}

        {isLogin === false && (
            <Input label="Confirm your password: " textInputConfig={{
                placeholder: "Confirm your password",
                secureTextEntry: true,
                value: userInputs.confirmPassword,
                onChangeText: (enteredValue) => handleChange("confirmPassword", enteredValue),
            }}
            invalid={passwordsAreEqual === false}
            />
        )}

        <View style={styles.buttons}>
            <Button onPress={handleSubmit}> {isLogin ? "Log In" : "Register"}</Button>
        </View>
        
        <View style={styles.buttons}>
            <FlatButton onPress={handleMove}> {isLogin ? "Create a user account" : "To Log In"}</FlatButton>
        </View>
        
    </View>
   
  )
};

const styles = StyleSheet.create({
    form: {
    padding: 10,
    marginTop: 100,
    marginHorizontal: 32,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "grey",
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.45,
    shadowRadius: 4,
    borderRadius: 4,
        
    },
    buttons: {
        marginTop: 10
    }
    
});

export default AuthForm