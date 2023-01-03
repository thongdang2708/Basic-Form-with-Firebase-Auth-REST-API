import {View, Text, StyleSheet, ActivityIndicator} from "react-native";
import Colors from "../constants/styles";

function Loading({message}) {
  

    return (
      <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}> {message} </Text>
          <ActivityIndicator size="large" color={"white"}/>
      </View>
    )
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary100
    },
    loadingText: {
        fontSize: 14,
        marginBottom: 8
    }
    

});

export default Loading