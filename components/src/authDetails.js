import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "firebase/auth"
import { Alert } from 'react-native'
import {useState} from 'react'
import { auth } from './firebase'
import {useDatabase} from './databaseDetails'

const useAuth = () => {
  const { navigate } = useNavigation()
  const {addUserToDB} = useDatabase()
  const {getUserType} = useDatabase()
  

  const signin = async (logInData) => {
     signInWithEmailAndPassword(auth, logInData.email, logInData.senha)
      .then( async (userCredential) => {
        const user = userCredential.user
        AsyncStorage.setItem('user', JSON.stringify(user))
        const data = await getUserType(user.uid)
        const tipo = JSON.parse(data)
        if (tipo.tipo == "aluno"){
          navigate('PaginaAluno')
        }else if (tipo.tipo == "professor"){
          navigate('PaginaProfessor')
        }else {
          navigate('HomeScreen')
        }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        AsyncStorage.removeItem('user')
        console.log(errorCode)
        console.log(errorMessage)
        Alert.alert(errorMessage)
      })
  }

  const signout = () => {
    AsyncStorage.removeItem('user')
    navigate('HomeScreen')
  }

  const createUser = (CadastroData) =>{
    createUserWithEmailAndPassword(auth, CadastroData.email, CadastroData.senha)
  .then((userCredential) => {
    const user = userCredential.user;
    AsyncStorage.setItem('user', JSON.stringify(user))


    const tipoData = {uuid:user.uid, tipo:CadastroData.tipo}
    addUserToDB(tipoData)

    console.log(CadastroData.tipo)

    if (CadastroData.tipo == 'aluno'){
      navigate('PaginaAluno')
    }else if (CadastroData.tipo == 'professor'){
      navigate('PaginaProfessor')
    }else {
      navigate('HomeScreen')
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    AsyncStorage.removeItem('user')
    console.log(errorCode)
    Alert.alert(errorMessage)
  });

  }

  return {
    signin,
    signout,
    createUser,
  }
}

export default useAuth
export { useAuth }