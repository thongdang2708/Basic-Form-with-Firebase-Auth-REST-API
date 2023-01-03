
import {View, Text, StyleSheet, Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function IconButton({icon, color, onPress}) {
  return (
    <Pressable onPress={onPress}>
        <View style={styles.iconButtonContainer}>
            <Ionicons name={icon} color={color} size={24}/>
        </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
    iconButtonContainer: {
        padding: 5,
        borderRadius: 24,
        marginVertical: 2,
        marginHorizontal: 8
    }
});

export default IconButton