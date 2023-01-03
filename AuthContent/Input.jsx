import {View, Text, StyleSheet, TextInput} from "react-native";
import Colors from "../constants/styles";
function Input({label, textInputConfig, invalid}) {



  return (
    <View style={styles.inputContainer}>
        <Text style={[styles.label, invalid && styles.invalidLabel]}> {label} </Text>
        <TextInput style={[styles.input, invalid && styles.invalidInput]} {...textInputConfig}/>
    </View>
  )
};

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 10
    },
    label: {    
        color: Colors.primary100,
        fontSize: 12,
        marginBottom: 6
    },
    input: {
        padding: 6,
        color: Colors.primary500,
        backgroundColor: Colors.primary100,
        fontSize: 14
    },
    invalidLabel: {
        color: Colors.error100
    },
    invalidInput: {
        backgroundColor: Colors.error500
    }
});

export default Input