
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './components/views/homeScreen'
import Quiz from './components/views/quiz'
import PaginaAluno from './components/views/Pagina_Aluno'
import PaginaProfessor from './components/views/Pagina_Professor'
import MateriaAluno from './components/views/selecionar_materia_aluno'
import Add_question from './components/views/Add_question';
import Cadastrar from './components/views/Cadastrar';
import Ranking from './components/views/ranking'

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="PaginaAluno" component={PaginaAluno} />
        <Stack.Screen name="MateriaAluno" component={MateriaAluno} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="PaginaProfessor" component={PaginaProfessor} />
        <Stack.Screen name="Add_question" component={Add_question} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}