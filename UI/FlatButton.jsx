import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../constants/styles";

function FlatButton({children, onPress}) {
  return (
    <View>
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.buttonPressed}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}> {children}</Text> 
            </View>
        </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    buttonText: {
        textAlign: "center",
        color: Colors.primary100,
        fontSize: 12,
        fontWeight: "bold"
    },
    buttonPressed: {
        opacity: 0.5
    }
});

export default FlatButton