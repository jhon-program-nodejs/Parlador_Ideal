import React from 'react'
import { StyleSheet, View, LogBox } from 'react-native';
import UserLogin from './src/Pages/UserLogin/index';
import RegisterUser from './src/Pages/UserRegistration/index';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
      <Stack.Screen name='UserLogin' component={UserLogin} />
      <Stack.Screen name='RegisterUser' component={RegisterUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    display:'flex'
  },
});
