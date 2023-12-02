import { Text, TextInput, SafeAreaView,TouchableOpacity,ScrollView,View,Alert,KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, React } from 'react';
import {Picker} from '@react-native-picker/picker';

import Styles from '../Styles'
import {useDatabase} from '../src/databaseDetails'


export default function Add_question(){
    const {navigate} = useNavigation()
    const {addPerguntaToDB} = useDatabase()
    const [perguntaData,setPerguntaData] = useState({questionTitle: '',
    respostas:[],solucao:'',
    materia:''})
    const [respostaTemp, setRespostaTemp] = useState({body: ''})

    return(

        <SafeAreaView style={Styles.container}>
        <ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}
      placeholder="Texto da questão"
      placeholderTextColor="#003f5c"
      onChangeText={text => setPerguntaData({...perguntaData, questionTitle: text})}
      value={perguntaData.questionTitle}
      />
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}
      placeholder="Adicione um resposta"
      placeholderTextColor="#003f5c"
      onChangeText={text => setRespostaTemp({...respostaTemp, body: text})}
      value={respostaTemp.body}/>
      </View>
      <View>
      <TouchableOpacity
          onPress={()=>{perguntaData.respostas.push(respostaTemp.body);
          setRespostaTemp({...respostaTemp, body: ""})}}
          style={Styles.button}>
          <Text>Adicionar resposta</Text>
        </TouchableOpacity>
    </View>
    
    <View style={Styles.paragraph}>
    <Text>Resposta correta: {perguntaData.solucao}</Text>
    </View>
    
    <View style={Styles.paragraph}>
      
      {perguntaData.respostas.map((choice) => (
        
        <TouchableOpacity
          onPress={() => setPerguntaData({...perguntaData, solucao: choice})}
          style={Styles.button}>
          <Text>{choice}</Text>
        </TouchableOpacity>
        
      ))}

    </View>
    

    <View style={Styles.paragraph}>
      <Text>Materia:</Text>
    </View>

    <Picker
    dropdownIconColor={"#007bff"}
    dropdownIconRippleColor={"#007bff"}
    itemStyle={Styles.inputText}
    mode='dropdown'
    selectedValue={perguntaData}
    onValueChange={(itemValue) => setPerguntaData({...perguntaData, materia: itemValue})} 
    >
        <Picker.Item label={perguntaData.materia} value=''/>
        <Picker.Item label='Programaçâo em C' value='Programaçâo em C'/>
        <Picker.Item label='Ilustração' value='Ilustração'/>
        <Picker.Item label='Programação em Java' value='Programação em Java'/>
        <Picker.Item label='Programação para dispositivos moveis' value='Programação para dispositivos moveis'/>
    </Picker>

    
        <TouchableOpacity style={Styles.button} 
        onPress={()=>{if (perguntaData.questionTitle == ''||
        perguntaData.solucao == '' ||
        perguntaData.materia == ''){
        Alert.alert("Preencha todos os campos!")
      }else {addPerguntaToDB(perguntaData)}}}>
        <Text>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button} 
        onPress={()=>navigate('PaginaProfessor')}>
        <Text>retornar para pagina do professor</Text>
        </TouchableOpacity>

        </KeyboardAvoidingView>
        </ScrollView>
        </SafeAreaView>
    );
}
