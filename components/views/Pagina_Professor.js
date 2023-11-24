import { Text, SafeAreaView,TouchableOpacity } from 'react-native';
import Styles from '../Styles'
import { useNavigation } from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { useEffect,useState } from 'react';
import { useAuth } from '../src/authDetails'

export default function PaginaProfessor() {
  const {navigate} = useNavigation();
  const {signout} = useAuth();
  const [user, setUser] = useState();

  useEffect(() => {
    AsyncStorage
      .getItem('user')
      .then(data => setUser(JSON.parse(data)))
  }, [])

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.paragraph}>
        Bem vindo, professor {user?.email}!
      </Text>
      
       <TouchableOpacity style={Styles.button}
       onPress={()=>navigate('Add_question')}>
      <Text>Adicionar pergunta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button}
      onPress={()=>navigate('Ranking')}>
      <Text>ver o rank</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.button}
      onPress={signout}>
      <Text>sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

