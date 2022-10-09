import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeSurah, Murottal, Pencarian} from '../../screen';
import {Warna_Putih, Warna_Utama} from '../../utils';
import {IconHome, IconMurottal, IconSearch} from '../../assets';
import {Bottom, CustomBottom} from '../../components';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={props => <Bottom {...props} />}>
      <Tab.Screen
        name="Al Quran"
        component={HomeSurah}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={IconHome}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Warna_Putih : Warna_Utama,
              }}
            />
          ),
          tabBarButton: props => <CustomBottom {...props} />,
        }}
      />
      <Tab.Screen
        name="Pencarian"
        component={Pencarian}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: Warna_Utama},
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Poppins-SemiBold',
            color: Warna_Putih,
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={IconSearch}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Warna_Putih : Warna_Utama,
              }}
            />
          ),
          tabBarButton: props => <CustomBottom {...props} />,
        }}
      />
      <Tab.Screen
        name="Murottal Quran"
        component={Murottal}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: Warna_Utama},
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Poppins-SemiBold',
            color: Warna_Putih,
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={IconMurottal}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Warna_Putih : Warna_Utama,
              }}
            />
          ),
          tabBarButton: props => <CustomBottom {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
