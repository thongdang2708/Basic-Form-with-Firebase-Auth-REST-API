

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from "./constants/styles";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './store/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './screens/LogIn';
import Register from './screens/Register';
import Welcome from './screens/Welcome';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';
import IconButton from './UI/IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const Stack = createNativeStackNavigator();

//Function for authentication

const AuthStack = () => {

  return (
    <Stack.Navigator initialRouteName='Register' screenOptions={{
        headerStyle: {backgroundColor: Colors.primary800},
        headerTintColor: "white",
    }}>
      <Stack.Screen name="Register" component={Register} options={{
      }}/>
      <Stack.Screen name="LogIn" component={LogIn} options={{
      }}/>
    </Stack.Navigator>
  )

};

const NavigationApp = () => {

  let {isAuthenticated, logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {backgroundColor: Colors.primary500},
      headerTintColor: "white" 
    }}>

      {isAuthenticated === false && (<Stack.Screen name="Authentication" component={AuthStack} options={{
        headerShown: false
      }}/>)}
      {isAuthenticated === true && (<Stack.Screen name="Welcome" component={Welcome} options={{
        headerRight: ({tintColor}) => {
          return <IconButton icon={"exit"} color={tintColor} onPress={handleLogout}/>
        }
      }}/>)}
    
    </Stack.Navigator>
  )
};

const Root = () => {

  let {authenticate, logout} = useContext(AuthContext);

  useEffect(() => {
    async function getToken () {
      let storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authenticate(storedToken);
      }
    }

    getToken();
  },[]);
  
  setTimeout(() => {
    logout();
  }, (1 * 60 * 60 * 1000));
  return <NavigationApp />

};




export default function App() {


  return (
  <>
  <StatusBar style='dark'/>
  <AuthProvider>
  <NavigationContainer>
      <Root />
  </NavigationContainer>
  </AuthProvider>
  </>
  );
}

const styles = StyleSheet.create({
 
});
