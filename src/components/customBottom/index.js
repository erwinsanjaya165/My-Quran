import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {Warna_Putih, Warna_Utama} from '../../utils';

const CustomButton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={styles.container}>
        <View style={styles.conterBottom}>
          <View style={styles.boxBottom}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={'white'}
            />
          </Svg>
          <View style={styles.boxBottom}></View>
        </View>

        <TouchableOpacity style={styles.conterIcon} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.boxIcon}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  conterBottom: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
  boxBottom: {
    flex: 1,
    backgroundColor: Warna_Putih,
  },
  conterIcon: {
    top: -27,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Warna_Utama,
    shadowColor: Warna_Utama,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  boxIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
});
