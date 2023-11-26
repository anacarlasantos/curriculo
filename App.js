import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home.js';
import Curriculo from './curriculo.js';
import home from './home.js';
import curriculo from './curriculo.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Curriculo" component={curriculo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;