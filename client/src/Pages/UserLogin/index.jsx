//import liraries
import React, {useEffect} from 'react';
import { LogBox} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Form from '../../Components/UserLoginComponent/Form/index'
import Title from '../../Components/UserLoginComponent/Title/index'


// create a component
const LoginDeUsuario = ({navigation}) => {
    const navigatior = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigatior.dispatch(state => {
                // Remove the home route from the stack
                const routes = state.routes.filter(r => r.name !== 'splash');
              
                return CommonActions.reset({
                  ...state,
                  routes,
                  index: routes.length - 1,
                });
              });
        },5000)
    },[])
    LogBox.ignoreLogs(['Remote debugger']);

    return (
<LinearGradient 
  style={{
	whith:'100%',
    height:'100%',
	borderRadius: 5}}

	colors={['#253549', '#7c8692', '#d3d7db']}>
                <Title />
                <Form 
                navigation={navigation}
                />
</LinearGradient>
    );
};


//make this component available to the app
export default LoginDeUsuario;





