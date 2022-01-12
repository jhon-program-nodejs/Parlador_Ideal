//import liraries
import React from 'react';
import { LogBox} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Form from '../../Components/UserRegistrationComponent/Form/index'
import Title from '../../Components/UserRegistrationComponent/Title/index'


// create a component
const LoginDeUsuario = () => {

    LogBox.ignoreLogs(['Remote debugger']);

    return (
<LinearGradient 
  style={{
	whith:'100%',
    height:'100%',
	borderRadius: 5}}

	colors={['#740ecd', '#a255e8', '#debbf7']}>
                <Title />
                <Form />
</LinearGradient>
    );
};


//make this component available to the app
export default LoginDeUsuario;


