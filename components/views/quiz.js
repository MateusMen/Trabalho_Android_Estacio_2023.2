import { Text, View,ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Styles from '../Styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import  AsyncStorage  from '@react-native-async-storage/async-storage'


import {useDatabase} from '../src/databaseDetails'





export default function Quiz({route})  {
  const {getPerguntas} = useDatabase()
  const {addRanking} = useDatabase()
  const {navigate} = useNavigation()

  const {materia} = route.params;

  const [perguntas,setPerguntas] = useState([])
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [score, setScore] = useState(0);
  
  
  const [user, setUser] = useState()

  useEffect(() => {
  getPerguntas(materia).then(data =>setPerguntas(data));
  
  AsyncStorage
      .getItem('user')
      .then(data => setUser(data));
}, [])

  const onSolucao = (solucaoInput) => {
    if (solucaoInput === perguntas[perguntaAtual].solucao) {
      setScore((score + 1));
    }

    const nextPergunta = perguntaAtual + 1;
    if (nextPergunta < perguntas.length) {
      setPerguntaAtual(nextPergunta);
    } else {
      
      
      
      alert(`Quiz terminado, seu score: ${score}/${perguntas.length}, acertou ${Number(((score / perguntas.length) * 100).toFixed(2))}% das vezes`)

      addRanking(user,Number(((score / perguntas.length) * 100).toFixed(2)),materia)

      setPerguntaAtual(0)
      setScore(0)
      
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
    <ScrollView style={{ paddingVertical: 32, paddingHorizontal: 16 }}>
      
      {perguntaAtual < perguntas.length ? (
        <View>
      <Text style={Styles.paragraph}>{perguntas[perguntaAtual].pergunta}</Text>
      {perguntas[perguntaAtual].respostas.map((choice) => (
        <TouchableOpacity
          onPress={() => onSolucao(choice)}
          style={Styles.button}>
          <Text style={Styles.paragraph}>{choice}</Text>
        </TouchableOpacity>
      ))}
    </View>
      ) : (
        <Text>null</Text>
      )}
      
      <TouchableOpacity style={Styles.button} 
          onPress={() => navigate('PaginaAluno')}>
          <Text style={Styles.paragraph}>Retornar</Text>
          </TouchableOpacity>


    </ScrollView>
    </SafeAreaView>
  );
};
