import { Text, SafeAreaView,TouchableOpacity } from 'react-native';
import Styles from './Styles'
import { useNavigation } from '@react-navigation/native';


export default function PaginaProfessor() {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.paragraph}>
        Pagina do professor 
      </Text>
       <TouchableOpacity style={Styles.button}
       onPress={()=>navigate('MateriaProfessor')}>
      <Text>Adicionar pergunta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button}>
      <Text>ver ranking</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

