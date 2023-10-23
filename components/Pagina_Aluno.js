import { Text, SafeAreaView,TouchableOpacity } from 'react-native';
import Styles from './Styles'
import { useNavigation } from '@react-navigation/native';


export default function PaginaAluno() {
  const {navigate} = useNavigation()
  
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.paragraph}>
        Pagina do Aluno
      </Text>
       <TouchableOpacity style={Styles.button}
      onPress={()=>navigate('MateriaAluno')}>
      <Text>Comecar quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button}>
      <Text>ver o rank</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}