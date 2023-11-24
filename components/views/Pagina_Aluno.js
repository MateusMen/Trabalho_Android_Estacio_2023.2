import { Text, SafeAreaView,TouchableOpacity  } from 'react-native';
import Styles from '../Styles'
import { useNavigation } from '@react-navigation/native';
import {useAuth} from '../src/authDetails'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { useEffect,useState } from 'react';



export default function PaginaAluno() {
  const {navigate} = useNavigation()
  const {signout} = useAuth()
  
  
  const [user, setUser] = useState()
  

  useEffect(() => {
    AsyncStorage
      .getItem('user')
      .then(data => setUser(JSON.parse(data)));
  }, [])

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.paragraph}>
        Bem vindo {user?.email}! 
      </Text>

      

       <TouchableOpacity style={Styles.button}
      onPress={()=>navigate('MateriaAluno')}>
      <Text>Comecar quiz</Text>
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