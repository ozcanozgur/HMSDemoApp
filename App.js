
import React from 'react';
import Login from './src/Login';
import HomePage from './src/HomePage';
import DetailsPage from './src/DetailsPage';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} /> */}
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Home' }} />
        <Stack.Screen name="Details" component={DetailsPage} options={{ title: 'Details' }} />
      </Stack.Navigator>

    </NavigationContainer>

  );
};

export default App;
