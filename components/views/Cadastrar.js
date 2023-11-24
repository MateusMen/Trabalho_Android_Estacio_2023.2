import { Text,TextInput,SafeAreaView, View, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

import {useAuth} from '../src/authDetails'
import Styles from '../Styles'
import { Alert } from 'react-native';

export default function Cadastrar(){
  const {createUser} = useAuth()
  const {navigate} = useNavigation()
  const [CadastroData, setCadastroData] = useState({ email: '', senha: '', tipo: '' })

  return(
    <SafeAreaView style={Styles.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>

    <Text>Cadastre-se como:</Text>

    <Picker
    dropdownIconColor={"#3AB4BA"}
    dropdownIconRippleColor={"#3AB4BA"}
    itemStyle={Styles.inputText}
  selectedValue={CadastroData}
  mode='dropdown'
  onValueChange={(itemValue) =>
    setCadastroData({...CadastroData, tipo: itemValue})
  }>
  <Picker.Item label={CadastroData.tipo} value="" />
  <Picker.Item label="aluno" value="aluno" />
  <Picker.Item label="professor" value="professor" />
</Picker>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}
      autoCapitalize='none'
      placeholder="Email"
      placeholderTextColor="#003f5c"
      onChangeText={text => setCadastroData({ ...CadastroData, email: text })}
      value={CadastroData.email}
      />
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}
      autoCapitalize='none'
      secureTextEntry
      placeholder="Senha"
      placeholderTextColor="#003f5c"
      onChangeText={text => setCadastroData({ ...CadastroData, senha: text })}
      value={CadastroData.senha}
      />
    </View>

    <TouchableOpacity style={Styles.button} 
      onPress={()=>{if (CadastroData.tipo == ''|| CadastroData.email == '' || CadastroData.senha==''){
        Alert.alert("Preencha todos os campos!")
      }else{ createUser(CadastroData)}}}>
      <Text>cadastrar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={Styles.button} 
      onPress={()=>navigate('HomeScreen')}>
      <Text>retornar</Text>
    </TouchableOpacity>

    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}