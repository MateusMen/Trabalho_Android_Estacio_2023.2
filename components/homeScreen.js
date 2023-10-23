import { Text,TextInput,SafeAreaView, View, TouchableOpacity } from 'react-native';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import Styles from './Styles'

export default function HomeScreen(){
  const {navigate} = useNavigation()
  const [email,setEmail] = useState({email: ''})
  const [password,setPassword] = useState({password: ''})
  const [destination,setDestination] = useState(0)

  const onPressLogin = () =>{
    if (email === 'Usuario@gmail.com') {
      if (password === 'SenhaCerta'){

        if (destination === 1){
          navigate('PaginaAluno')
        }else
        if (destination === 2){
          navigate('PaginaProfessor')
        }else{
          alert('Escolha um destino antes de fazer log in')
        }

      } else{
        alert('Senha incorreta');
      }

    } else {
      alert('Esse usuario não existe');
    }

  }

  const setAluno = () =>{
    setDestination(1)
  }
  const setProfessor = () =>{
    setDestination(2)
  }

  return(
    <SafeAreaView style={Styles.container}>

    <Text>Revise agora!</Text>
    <Text>Você é?!</Text>

    <TouchableOpacity style={Styles.button}
    onPress={setAluno}>
      <Text>  Aluno?  </Text>
    </TouchableOpacity>

    <TouchableOpacity style={Styles.button}
    onPress={setProfessor}>
      <Text>Professor?</Text>
    </TouchableOpacity>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}placeholder="Email"
      placeholderTextColor="#003f5c"
      onChangeText={text => setEmail(text)}
      />
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}
      secureTextEntry
      placeholder="Password"
      placeholderTextColor="#003f5c"
      onChangeText={text => setPassword(text)}
      />
    </View>

    <TouchableOpacity style={Styles.button} 
      onPress={onPressLogin}>
      <Text>Login</Text>
    </TouchableOpacity>

    </SafeAreaView>
  )
}