import { Text, SafeAreaView,TouchableOpacity,ScrollView,View,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, React, useEffect } from 'react';
import  AsyncStorage  from '@react-native-async-storage/async-storage'

import Styles from '../Styles'
import {useDatabase} from '../src/databaseDetails'

export default function Ranking(){
    const {navigate} = useNavigation()
    const {getRanking} = useDatabase()
    const {getUserType} = useDatabase()

    const [user, setUser] = useState()
    const [ranking,setRanking] = useState([])
    const [refresh,setRefresh] = useState( true )

    

    const sort_by = (field, reverse, primer) => {
      /*coloque a array que deseja ordenar em field
        reverse controla se é alto-para-baixo(true) ou o contrario(false)
        primer pode ser usado para especificar se esta sorteando ints ou strings*/

      const key = primer ?
        function(x) {
          return primer(x[field])
        } :
        function(x) {
          return x[field]
        };
    
      reverse = !reverse ? 1 : -1;
    
      return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      }
    }


    useEffect(() => {
    getRanking().then(data =>setRanking(data));

    AsyncStorage
      .getItem('user')
      .then(async user => {if (user) {

        const userData = JSON.parse(user)
        
        setUser(JSON.parse( await getUserType(userData.uid)))
      }});
      
    }, [])

    const Item = ({ email, Programação_em_C, Ilustração, Programação_em_Java, Programação_para_Dispositivos_Moveis }) => {
      return (
        <View style={{flex: 1,
          backgroundColor: '#white',
          alignItems: 'center',
          justifyContent: 'center',
          padding:8}}>
          <Text style={Styles.paragraphList}>{email}: Programação em C:{Programação_em_C}% Ilustração: {Ilustração}%
          Programação em Java: {Programação_em_Java}% Programação para Dispositivos Moveis {Programação_para_Dispositivos_Moveis}%</Text>
        </View>
      )
    }

    return(
        <SafeAreaView style={Styles.container}>

        <View>
        <FlatList
        data={ranking}
        renderItem={({item}) => <Item email={item.email} 
        Programação_em_C={item.Programação_em_C}
        Ilustração={item.Ilustração}
        Programação_em_Java={item.Programação_em_Java}
        Programação_para_Dispositivos_Moveis={item.Programação_para_Dispositivos_Moveis}
        />}
        keyExtractor={item => item.id}
        extraData={refresh}
      />
      </View>
      
      <Text style={Styles.paragraph}>ordenar por:</Text>

        <TouchableOpacity style={Styles.button}
        onPress={()=>{ranking.sort(sort_by('Programação_em_C',true, parseInt))
        setRefresh( !refresh )}}>
            <Text>Programação em C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button}
        onPress={()=>{ranking.sort(sort_by('Ilustração',true, parseInt))
        setRefresh( !refresh )}}>
            <Text>Ilustração</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button}
        onPress={()=>{ranking.sort(sort_by('Programação_em_Java',true, parseInt))
        setRefresh( !refresh )}}>
            <Text>Programação em Java</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button}
        onPress={()=>{ranking.sort(sort_by('Programação_para_Dispositivos_Moveis',true, parseInt))
        setRefresh( !refresh )}}>
            <Text>Programação para Dispositivos Moveis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button}
        onPress={()=>{if(user.tipo == 'aluno'){
          navigate('PaginaAluno')
        }else if(user.tipo == 'professor'){
          navigate('PaginaProfessor')
        }else{
          navigate('HomeScreen')
        }
        }}>
            <Text>Retornar</Text>
        </TouchableOpacity>

        
        </SafeAreaView>
    )
}