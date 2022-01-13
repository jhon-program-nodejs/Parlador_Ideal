import React from 'react'
import { StyleSheet, View, LogBox } from 'react-native';
import UserLogin from './src/Pages/UserLogin/index';
import RegisterUser from './src/Pages/UserRegistration/index';
import Posts from './src/Pages/PostPage';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import splash from './img/splash';
import NewPost from './src/Pages/NewPost';

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='splash' >
      <Stack.Screen name='splash' component={splash} />
      <Stack.Screen name='UserLogin' component={UserLogin} />
      <Stack.Screen name='Posts' component={Posts} screenOptions={{headerShown:false}}/>
      <Stack.Screen name='RegisterUser' component={RegisterUser}screenOptions={{headerShown:false}} />
      <Stack.Screen name='NewPosts' component={NewPost}screenOptions={{headerShown:false}} />
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
