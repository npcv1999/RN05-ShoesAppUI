import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens';
import {Image, StatusBar, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, icons} from './utils';

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
  backgroundColor: 'white',
};

const App = () => {
  return (
    <>
      <StatusBar {...BarStyle} />
      <NavigationContainer {...MyTheme}>
        <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'SHOE SELECTOR',
              headerTintColor: COLORS.lightGray,
              headerTitleStyle: {...FONTS.largeTitleBold},
              headerTitleAlign: 'center',
              headerLeft: ({onPress}) => (
                <TouchableOpacity onPress={onPress}>
                  <Image
                    source={icons.menu}
                    style={{width: 20, height: 20}}></Image>
                </TouchableOpacity>
              ),
              headerRight: ({onPress}) => (
                <TouchableOpacity onPress={onPress}>
                  <Image
                    source={icons.search}
                    style={{width: 20, height: 20}}></Image>
                </TouchableOpacity>
              ),
            }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
