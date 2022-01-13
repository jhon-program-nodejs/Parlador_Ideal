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
      data.forEach(element => {
        if (element.userName === userName) {
          resultFilterData.userName = element.userName
          if (element.senha === senha) {
            resultFilterData.senha = element.senha

          }
        }

      })



      const emailRegexValidation = regex.regexEmail.test(userName)
      const senhaRegexValidation = regex.regexSenha.test(senha)
      const validation = resultFilterData.userName !== userName
      const identicalPasswords = senha === confimationsenha


      if ((emailRegexValidation && senhaRegexValidation && validation && identicalPasswords)) {
        setUsername('')
        setSenha('')
        setConfimationSenha('')
        Axios.post('http:/192.168.1.12:4000/mandar', {
          userName: userName,
          senha: senha
        }).then(() => console.log('Usuário cadastrado com sucesso!')).catch(err => console.log(err))
        alertFunction(menssage, 2000)

      } else {

        if ((emailRegexValidation === false) && (userName === null || userName === "")) {

          const message = `Campo de email vazio!...`
          alertFunction(message, 7000)
       
        }

        else if (emailRegexValidation === false && userName !== "") {
         
          const message = `O email ${userName} está incorreto...`
          alertFunction(message, 7000)
          console.log('Aqui userName é vazio ou regex foi regeitado!');

        }
        else if (emailRegexValidation && resultFilterData.userName === userName) {

          const message = `O email ${userName} ja está cadastrado!...`
          alertFunction(message, 7000)
        
        }

        else if (senhaRegexValidation === false && senha !== null ) {

          const message = `Senha ${senha} incorreta!\n Verifique se a senha tem pelo menos uma letra maiúscula, uma letra minúscula, um caracter especial e ou um número`
          alertFunction(message, 5000)

        }
        else if (senhaRegexValidation === false && (senha === null || senha === "")) {

          const message = `Campo senha vazio!`
          alertFunction(message, 5000)

        }

        else if (identicalPasswords === false) {

          const message = `A senhas não coincidem!...`
          alertFunction(message, 7000)

        }
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

