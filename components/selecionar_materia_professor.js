import { ScrollView,Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from './Styles'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MateriaProfessor() {
  const {navigate} = useNavigation();
  const addingQuestion = () =>{
    navigate('Add_question')
  }

  return (
    <SafeAreaView style={Styles.container}>
    <ScrollView>

      <Text style={Styles.paragraph}>
        Escolha a materia que quer adicionar questões 
      </Text>

      <TouchableOpacity
        style={Styles.button}
        onPress={addingQuestion}>
        <Text>Progamaçâo em C </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={addingQuestion}>
        <Text>Ilustração </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={addingQuestion}>
        <Text>Progamação em Java </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={addingQuestion}>
        <Text>Progamação para dispositivos moveis </Text>
      </TouchableOpacity>

    </ScrollView>
    </SafeAreaView>
  );
}