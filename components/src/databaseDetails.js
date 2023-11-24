import { addDoc, getDoc, getDocs, doc, setDoc,collection, query, where,getCountFromServer } from 'firebase/firestore'
import { Alert } from 'react-native'
import { db } from './firebase'

const useDatabase = () =>{

    const getUserType = async (uid) => {
        try {
          const snapshoot = await getDoc(doc(db,'Usuarios',uid))
          const data = snapshoot.data()
          const stringifyedData = JSON.stringify(data);
          return stringifyedData
        } catch (error) {
          Alert.alert('Erro...', 'Erro ao recuperar os dados de usuario.')
          console.log(error)
        }
    }

    const addUserToDB = async (body) => {
        try {
          await setDoc(doc(db, 'Usuarios',body.uuid), {tipo: body.tipo});
          Alert.alert('Sucesso...', 'Dados gravados com sucesso.')
        } catch (error) {
          console.log(error)
          Alert.alert('Erro...', 'Erro ao gravar os dados de usuario.')
        }
      }

      const addPerguntaToDB = async (body) => {
        try {
          const docRef = await addDoc(collection(db,'Perguntas'), 
            { pergunta: body.questionTitle,
              respostas: body.respostas,
              solucao: body.solucao,
              materia: body.materia });
          console.log("Document written with ID: ", docRef.id);
          Alert.alert('Sucesso...', 'Dados gravados com sucesso.')
        } catch (error) {
          console.log(error)
          Alert.alert('Erro...', 'Erro ao gravar as perguntas.')
        }
      }

      const getPerguntas = async (materia) =>{
        try {
            const data = []

            const q = query(collection(db,'Perguntas'), where('materia','==',String(materia)))
              
            const snapshoot =  await getDocs(q)
            snapshoot.forEach(e => data.push({ id: e.id, ...e.data() }))
            return data
          } catch (error) {
            Alert.alert('Erro...', 'Erro ao recuperar as perguntas.')
            console.log(error)
          }
    }

    
    const getRanking = async() =>{
      try{
        const data = []

        const q = query(collection(db,'Ranking'), where('email','!=','base'))
              
        const snapshoot =  await getDocs(q)
        snapshoot.forEach(e => data.push({ id: e.id, ...e.data() }))
        return data
      }catch (error){
        console.log(error)
      }
    }

    const addRanking = async (userRaw,score,materia) =>{
      try{
        const user = JSON.parse(userRaw)

        const materiaUnderscores = materia.replaceAll(/ /g, "_")

        const snapshoot =  await getCountFromServer(query(collection(db,'Ranking'), where("email","==",user.email)))
        
        if (snapshoot.data().count == 0){
          await setDoc(doc(db,"Ranking",user.uid),
        {email: user.email,
         Programação_em_C: 0,
         Ilustração: 0,
         Programação_em_Java: 0,
         Programação_para_Dispositivos_Moveis: 0},
        )
        
        await setDoc(doc(db,"Ranking",user.uid),
        { [materiaUnderscores]: score },
        { merge: true });
          
        } else {
          await setDoc(doc(db,"Ranking",user.uid),
        {[materiaUnderscores]: score},
        { merge: true} );
        }
        
        
      }catch (error){
        console.log(error)
        console.log(errorMessage)
        Alert.alert(errorMessage)
      }
    }


      return {
        getUserType,
        addUserToDB,
        addPerguntaToDB,
        getPerguntas,
        addRanking,
        getRanking
      }
}

export default useDatabase
export { useDatabase }