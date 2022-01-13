import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Vibration, LogBox, StyleSheet } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import animationJson from '../../../../assets/redirect.json'
import Axios from 'axios'
import regex from '../../../../regex'



const resultFilterData = {}

export default function Form({ navigation }) {

  LogBox.ignoreLogs(['Remote debugger']);

  const [userName, setUsername] = useState(null)
  const [senha, setSenha] = useState(null)
  const [messageAlert, setMessageAlert] = useState("")
  const [textCadsastro, setTextCadsastro] = useState('Escreva-se...')
  const [goToNextPage, setGoToNextPage] = useState(() => navigation.navigate('UserLogin'))
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [inconName, setInconName] = useState('eye')
  const [hiddenAndVisybleAnimation, setHiddenAndVisybleAnimation] = useState('none')
  const [hiddenAndVisybleText, setHiddenAndVisybleText] = useState('flex')

  const alertFunction = (menssagem, mileSeconds) => {
    setMessageAlert(menssagem)
    Vibration.vibrate()
    setTimeout(() => {
      setMessageAlert('')
    }, mileSeconds)
  }

  const sendValues = () => {



    Axios.get('http:/192.168.1.12:4000/consult').then(usuarios => {

      const { data } = usuarios
      data.forEach(element => {
        if (element.userName === userName) {
          resultFilterData.userName = element.userName
          if (element.senha === senha) {
            resultFilterData.senha = element.senha

          }
        }

      })

      console.log(resultFilterData.userName === userName);
      console.log(resultFilterData.senha === senha);

      if (resultFilterData.userName === userName && resultFilterData.senha === senha) {
        setHiddenAndVisybleAnimation('flex')
        setHiddenAndVisybleText('none')
        setTimeout(()=>{
          
          goToNextPageRegister('Posts')
          
        },7000)
        setUsername('')
        setSenha('')
      } else if ((regex.regexEmail.test(userName) !== true || resultFilterData.userName === undefined) && resultFilterData.userName !== userName) {
        console.log('Aqui estamos no usuario nao encontrado');
        const menssage = 'Usuario não encontrado !'
        alertFunction(menssage, 10000)
        return
      }
      else if ((regex.regexSenha.test(senha) !== true || resultFilterData.senha === undefined || senha === null)) {
        console.log('Aqui estamos no usuario senha invalida');
        const message = `Senha incorreta !`
        alertFunction(message, 10000)
      }

    }).catch(err => console.log(err))
  }

  const activateHiddenPassword = () => {
    if (visiblePassword) {
      setVisiblePassword(false)
      setInconName('eye')
      return
    }
    setVisiblePassword(true)
    setInconName('eye-closed')
  }

  const goToNextPageRegister = (router) => {
      
      setGoToNextPage(navigation.navigate(router))
      setHiddenAndVisybleAnimation('none')
      setHiddenAndVisybleText('flex')
      
    return goToNextPage
  }

   const styles = StyleSheet.create({
    formContent: {
      flex: 1,
      bottom: 0,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: 30,
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
      padding: 10,
      fontSize: 18,

    },

    formInputSenha: {
      flexDirection: 'row',
      width: "90%",
      borderRadius: 50,
      backgroundColor: '#e1e5e5',
      height: 55,
      padding: 14,
      fontSize: 18,
    },
    formInputSenhaContainer: {
      width:'95%',
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:'7%',
    },
    incosEye: {
      position: 'absolute',
      marginLeft: 270,
    },
    button: {
      width: '60%',
      height: 60,
      justifyContent: 'center',
      alignItems: "center",
      backgroundColor: '#2596be',
      borderRadius: 50,
      marginTop: 0,
      marginBottom: 20,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 25,
    },
    textAlert: {
      fontSize: 18,
      color: '#ff0000',
      padding: 10,
      textAlign: 'center',
    },
    container: {
      width: 350,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      display:`${hiddenAndVisybleText}`,
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',

    },
 
    displayContainer: {
      display:`${hiddenAndVisybleAnimation}`,
      width:300,
      height:'auto',
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
    },
   

  });




  return (
    <View style={styles.formContent}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setUsername}
          value={userName}
          placeholder="Digite seu Email"
          keyboardType="email-address"
        />
        <Text
          style={styles.formLabel}>
          Senha
        </Text>
      </View>

      <View style={styles.formInputSenhaContainer}>
        <TextInput style={styles.formInputSenha}
          onChangeText={setSenha}
          value={senha}
          placeholder='Digite sua senha'
          keyboardType='web-search'
          secureTextEntry={visiblePassword}
        />
        <Octicons
          style={styles.incosEye}
          name={inconName}
          size={24}
          color="black"
          onPress={activateHiddenPassword}
        />

      </View>
      <Text style={styles.textAlert}>{messageAlert}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={sendValues}
      >
        <Text
          style={styles.buttonText}
          onPress={() => sendValues()}
        >
          Entrar
        </Text>
      </TouchableOpacity>
      <View
        style={styles.container}>
        <TouchableOpacity>
          <Text
            style={styles.text}
            onPress={()=>{
              setHiddenAndVisybleAnimation('flex')
              setHiddenAndVisybleText('none')
              setTimeout(()=>{
                
                goToNextPageRegister('RegisterUser')
                
              },7000)
              }}
          >
            {textCadsastro}
          </Text>
          <View style={styles.displayContainer} >
            <View >
              <LottieView
                style={{
                  width: 100,
                  height: 100,
                }}
                source={animationJson}
                speed={.2}
                autoPlay
                loop
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )


}
