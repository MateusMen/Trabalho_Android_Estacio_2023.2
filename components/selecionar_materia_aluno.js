import { ScrollView,Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from './Styles'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MateriaALuno() {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={Styles.container}>
    <ScrollView>

      <Text style={Styles.paragraph}>
        escolha a materia a qual quer fazer o quiz 
      </Text>

      <TouchableOpacity
        style={Styles.button}
        onPress={()=>navigate('Quiz')}>
        <Text>Progamaçâo em C </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={()=>navigate('Quiz')}>
        <Text>Ilustração </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={()=>navigate('Quiz')}>
        <Text>Progamação em Java </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={()=>navigate('Quiz')}>
        <Text>Progamação para dispositivos moveis </Text>
      </TouchableOpacity>

    </ScrollView>
    </SafeAreaView>
  );
}