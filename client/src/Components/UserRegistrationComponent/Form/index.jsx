import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Vibration, LogBox } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import Axios from 'axios'
import style from "./style"
import regex from '../../../../regex'



const resultFilterData = {}

export default function Form({ navigation }) {

  LogBox.ignoreLogs(['Remote debugger']);

  const [userName, setUsername] = useState(null)
  const [senha, setSenha] = useState(null)
  const [confimationsenha, setConfimationSenha] = useState(null)
  const [messageAlert, setMessageAlert] = useState("")
  const [visiblePasswordOne, setVisiblePasswordOne] = useState(false)
  const [visiblePasswordTwo, setVisiblePasswordTwo] = useState(false)
  const [inconNameOne, setInconNameOne] = useState('eye')
  const [inconNameTwo, setInconNameTwo] = useState('eye')


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
      console.log(data)
      data.forEach(element => {
        if (element.userName === userName) {
          resultFilterData.userName = element.userName
          if (element.senha === senha) {
            resultFilterData.senha = element.senha

          }
        }

      })

      console.log(senha, userName);

      if (resultFilterData.userName === userName && resultFilterData.senha === senha) {

        console.log('Usuario Logado!!!')
        setUsername('')
        setSenha('')
        setTextCadsastro('logando...')
        return
      } else if ((regex.regexEmail.test(userName) !== true || resultFilterData.userName === undefined) && resultFilterData.userName !== userName) {

        const menssage = 'Usuario não encontrado !'
        alertFunction(menssage, 2000)

      }
      else if ((regex.regexSenha.test(senha) !== true || resultFilterData.senha === undefined)) {
        if (resultFilterData.senha !== senha) {

        }
        const message = `Senha incorreta !`
        alertFunction(message, 5000)
        return
      }

    }).catch(err => console.log(err))
  }

  const activateHiddenPassword = (params) => {
    console.log(params === 'eye' || params === 'eye-closed');
    if (params === 'eye' || params === 'eye-closed') {
      if (params === 'eye') {
        setVisiblePasswordOne(true)
        setInconNameOne('eye-closed')
        return
      } else if (params === 'eye-closed') {
        setVisiblePasswordOne(false)
        setInconNameOne('eye')

      }
    }
  }
  const activateHiddenPasswordConfirmate = (params) => {
    console.log(params === 'eye' || params === 'eye-closed');
    if (params === 'eye' || params === 'eye-closed') {
      if (params === 'eye') {
        setVisiblePasswordTwo(true)
        setInconNameTwo('eye-closed')
        return
      } else if (params === 'eye-closed') {
        setVisiblePasswordTwo(false)
        setInconNameTwo('eye')

      }
    }
  }

  return (
    <View style={style.formContent}>
      <View style={style.form}>
        <Text style={style.formLabel}>Email</Text>
        <TextInput
          style={style.formInput}
          onChangeText={setUsername}
          value={userName}
          placeholder="Digite seu Email"
          keyboardType="email-address"
          spellCheck
        />

        <Text
          style={style.formLabel}>
          Senha
        </Text>
        <View style={style.formInputSenhaContainer}>
          <TextInput style={style.formInputSenha}
            onChangeText={setSenha}
            value={senha}
            placeholder='Digite sua senha'
            keyboardType='web-search'
            secureTextEntry={visiblePasswordOne}
            spellCheck
          />
          <Octicons
            style={style.incosEye}
            name={inconNameOne}
            size={24}
            color="black"
            onPress={() => activateHiddenPassword(inconNameOne)}
          />
        </View>
        <Text
          style={style.formLabel}>
          Confirmar Senha
        </Text>
        <View style={style.formInputSenhaContainer}>
          <TextInput style={style.formInputSenha}
            onChangeText={setConfimationSenha}
            value={confimationsenha}
            placeholder='Confirme sua senha'
            keyboardType='web-search'
            secureTextEntry={visiblePasswordTwo}
            spellCheck
          />
          <Octicons
            style={style.incosEye}
            name={inconNameTwo}
            size={24}
            color="black"
            onPress={() => activateHiddenPasswordConfirmate(inconNameTwo)}
          />
        </View>
        <Text style={style.textAlert}>{messageAlert}</Text>
        <View style={style.buttonContainer}>
          <TouchableOpacity
            style={style.button}
            onPress={sendValues}
          >
            <Text style={style.buttonText} >
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}

