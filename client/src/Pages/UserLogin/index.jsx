//import liraries
import React from 'react';
import { LogBox} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Form from '../../Components/UserLoginComponent/Form/index'
import Title from '../../Components/UserLoginComponent/Title/index'


// create a component
const LoginDeUsuario = ({navigation}) => {

    LogBox.ignoreLogs(['Remote debugger']);

    return (
<LinearGradient 
  style={{
	whith:'100%',
    height:'100%',
	borderRadius: 5}}

	colors={['#740ecd', '#a255e8', '#debbf7']}>
                <Title />
                <Form 
                navigation={navigation}
                />
</LinearGradient>
    );
};


//make this component available to the app
export default LoginDeUsuario;





