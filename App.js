
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator()

import HomeScreen from './components/homeScreen'
import Quiz from './components/quiz'
import PaginaAluno from './components/Pagina_Aluno'
import PaginaProfessor from './components/Pagina_Professor'
import MateriaAluno from './components/selecionar_materia_aluno'
import MateriaProfessor from './components/selecionar_materia_professor'
import { View, Text } from 'react-native';
import Add_question from './components/Add_question';

function TabRoutes() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="HomeScreen" component={HomeScreen} />
      <Tabs.Screen name="PaginaAluno" component={PaginaAluno} />
      <Tabs.Screen name="MateriaAluno" component={MateriaAluno} />
      <Tabs.Screen name="Quiz" component={Quiz} />
      <Tabs.Screen name="PaginaProfessor" component={PaginaProfessor} />
      <Tabs.Screen name="MateriaProfessor" component={MateriaProfessor} />
      <Tabs.Screen name="Add_question" component={Add_question} />
    </Tabs.Navigator>
  )
}

export default function App() {

  
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={TabRoutes} />
        <Stack.Screen name="PaginaAluno" component={PaginaAluno} />
        <Stack.Screen name="MateriaAluno" component={MateriaAluno} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="PaginaProfessor" component={PaginaProfessor} />
        <Stack.Screen name="MateriaProfessor" component={MateriaProfessor} />
        <Stack.Screen name="Add_question" component={Add_question} />
        <Stack.Screen name="Tabs" component={TabRoutes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}