import { ScrollView,Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from '../Styles'
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
        onPress={()=>navigate('Quiz',{ materia:'Programação em C'})}>
        <Text>Programaçâo em C </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={()=>navigate('Quiz',{ materia:'Ilustração'})}>
        <Text>Ilustração </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={()=>navigate('Quiz',{ materia:'Programação em Java'})}>
        <Text>Programação em Java </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={()=>navigate('Quiz',{ materia:'Programação para Dispositivos Moveis'})}>
        <Text>Programação para dispositivos moveis </Text>
      </TouchableOpacity>

    </ScrollView>
    </SafeAreaView>
  );
}