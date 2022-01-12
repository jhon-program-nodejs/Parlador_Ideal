//import liraries
import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    formContent: {
        flex:1,
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: 20,
        padding: 10,
    },
    formLabel: {
        color: '#ffffff',
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: '#e1e5e5',
        height: 55,
        margin: 14,
        padding: 14,
        fontSize:18,

    },
    formInputSenha: {
        flexDirection:'row',
        width: "88%",
        borderRadius: 50,
        backgroundColor: '#e1e5e5',
        height: 55,
        padding: 14,
        fontSize:18,
    },
    formInputSenhaContainer: {
        width:'110%',
        position:'relative',
        flexDirection:'row',
        alignItems:'center',
        padding:10,

    },
    incosEye:{
        position:'absolute',
        marginLeft:280,
    },
    buttonContainer:{
        width:'100%',
        height:80,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        width:'60%',
        height:60,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'#2596be',
        borderRadius:50,
    },
    buttonText:{
        color:'#ffffff',
        fontSize:25,
    },
    textAlert:{
        fontSize:18,
        color:'#ff0000',
        padding:5,
        textAlign:'center',
    },
    container: {
        width: 350,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
      },
      text:{
        
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold',
      },
     
});

//make this component available to the app
export default styles;
