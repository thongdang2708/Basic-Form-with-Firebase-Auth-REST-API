import React, { useState } from 'react';
import {View, Text, StyleSheet} from "react-native";
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';
import Colors from '../constants/styles';

function Welcome() {

  let {token} = useContext(AuthContext);
  let [message, setMessage] = useState("");

  useEffect(() => {

    axios.get("https://react-native-course-4922d-default-rtdb.firebaseio.com/message.json?auth=" + token)
    .then((response) => {
      setMessage(response.data);
    });
  },[token]);

  return (
    <View style={styles.messageContainer}>
      <Text style={styles.title}> Main Title: </Text>
      <Text style={styles.text}> {message}</Text> 
    </View>
  )
};

const styles = StyleSheet.create({
    messageContainer: {
      flex: 1,
      backgroundColor: Colors.primary100,
      alignItems: "center",
      justifyContent: "center"
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 14
    },
    text: {
      fontSize: 12,
    }
});

export default Welcome