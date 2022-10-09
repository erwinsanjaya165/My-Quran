import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Halaman,
  Intro_Screen,
  Juz,
  PerHalaman,
  PerJuz,
  PerMurottal,
  PerSurah,
  Surah,
} from '../screen';
import {BottomTabs} from '../components';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="intro_screen"
        component={Intro_Screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="persurah"
        component={PerSurah}
        options={{headerShown: false}}
      />
      <Stack.Screen name="juz" component={Juz} options={{headerShown: false}} />
      <Stack.Screen
        name="perjuz"
        component={PerJuz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="halaman"
        component={Halaman}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="perhalaman"
        component={PerHalaman}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="permurottal"
        component={PerMurottal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
