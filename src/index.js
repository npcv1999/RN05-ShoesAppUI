import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens';
import {StatusBar, View} from 'react-native';

const Stack = createNativeStackNavigator();

const MyTheme = {
  theme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  },
};
const BarStyle = {
  animated: true,
  barStyle: 'dark-content',
  hidden: false,
};

const screenOptions = {};

const App = () => {
  console.log(DefaultTheme);
  return (
    <>
      <StatusBar {...BarStyle} />
      <NavigationContainer {...MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
