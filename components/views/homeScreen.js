import { Text,TextInput,SafeAreaView, View, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage'

import Styles from '../Styles'
import {useAuth} from '../src/authDetails'
import {useDatabase} from '../src/databaseDetails'

export default function HomeScreen(){
  const {navigate} = useNavigation()
  const {signin} = useAuth()
  const {getUserType} = useDatabase()


  const [logInData, setLogInData] = useState({ email: '', senha: '' })

  useEffect(() => {
    AsyncStorage.getItem('user').then(async user => {
      if (user) {
        const userData = JSON.parse(user)
        const userType = JSON.parse( await getUserType(userData.uid))
        if(userType.tipo == 'aluno'){
          navigate('PaginaAluno')
        }else if(userType.tipo == 'professor'){
          navigate('PaginaProfessor')
        }else{
          navigate('HomeScreen')
        }
      }
    })
  }, [])


  return(
    <SafeAreaView style={Styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      
      <View style={Styles.paragraph}>
    <Text>Revise agora!</Text>
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}
      autoCapitalize='none'
      placeholder="Email"
      placeholderTextColor="#003f5c"
      onChangeText={text => setLogInData({ ...logInData, email: text })}
        value={logInData.email}
      />
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}
      autoCapitalize='none'
      secureTextEntry
      placeholder="Senha"
      placeholderTextColor="#003f5c"
      onChangeText={text => setLogInData({ ...logInData, senha: text })}
        value={logInData.senha}
      />
    </View>

   
    <TouchableOpacity style={Styles.button} 
      onPress={()=>signin(logInData)}>
      <Text>Login</Text>
    </TouchableOpacity>
    
    
    <TouchableOpacity style={Styles.button} 
      onPress={()=>navigate('Cadastrar')}>
      <Text>Cadastre-se</Text>
    </TouchableOpacity>
    

    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}