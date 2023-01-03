import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../constants/styles";

function Button({children, onPress}) {
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
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: Colors.primary500
    },
    buttonPressed: {
        opacity: 0.35
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold"
    }
});

export default Button