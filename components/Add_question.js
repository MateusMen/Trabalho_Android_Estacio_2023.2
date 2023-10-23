import { Text, SafeAreaView,TouchableOpacity } from 'react-native';
import Styles from './Styles'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';

export default function Add_question(){
    const {navigate} = useNavigation()
    const [questionTitle,setQuestionTitle] = useState({questionTitle: ''})
    const [respostaA,setRespostaA] = useState({respostaA: ''})
    const [respostaB,setRespostaB] = useState({respostaB: ''})
    const [respostaC,setRespostaC] = useState({respostaC: ''})
    const [respostaD,setRespostaD] = useState({respostaD: ''})
    const [respostaE,setRespostaE] = useState({respostaE: ''})
    const [correta,setCorreta] = useState()

    const enviarPraDatabase = () =>{

    }

    return(
        <SafeAreaView style={Styles.container}>
        <ScrollView>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}placeholder="Texto da questão"
      placeholderTextColor="#003f5c"
      onChangeText={text => setQuestionTitle(text)}
      />
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}placeholder="resposta A"
      placeholderTextColor="#003f5c"
      onChangeText={text => setRespostaA(text)}
      />
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}placeholder="resposta B"
      placeholderTextColor="#003f5c"
      onChangeText={text => setRespostaB(text)}
      />
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}placeholder="resposta C"
      placeholderTextColor="#003f5c"
      onChangeText={text => setRespostaC(text)}
      />
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}placeholder="resposta D"
      placeholderTextColor="#003f5c"
      onChangeText={text => setRespostaD(text)}
      />
    </View>

    <View style={Styles.inputView}>
      <TextInput style={Styles.inputText}placeholder="resposta E"
      placeholderTextColor="#003f5c"
      onChangeText={text => setRespostaE(text)}
      />
    </View>

    <Picker
    selectedValue={correta}
    onValueChange={(itemValue,itemIndex) => setCorreta(itemValue)} 
    >
        <Picker.Item label='A' value='A'/>
        <Picker.Item label='B' value='B'/>
        <Picker.Item label='C' value='C'/>
        <Picker.Item label='D' value='D'/>
        <Picker.Item label='E' value='E'/>
    </Picker>

        <TouchableOpacity style={Styles.button} 
        onPress={enviarPraDatabase}>
        <Text>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button} 
        onPress={navigate(PaginaProfessor)}>
        <Text>retornar para pagina do professor</Text>
        </TouchableOpacity>

        </ScrollView>
        </SafeAreaView>
    );
}