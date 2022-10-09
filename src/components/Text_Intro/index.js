import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Warna_Putih} from '../../utils';

const Text_Intro = ({arabic, translate}) => {
  return (
    <>
      <Text numberOfLines={3} style={styles.text_Arab}>
        {arabic}
      </Text>
      <Text numberOfLines={7} style={styles.text_Arti}>
        {translate}
      </Text>
    </>
  );
};

export default Text_Intro;

const styles = StyleSheet.create({
  text_Arab: {
    fontSize: 24,
    fontFamily: 'Amiri-Bold',
    color: Warna_Putih,
    marginTop: '-15%',
    paddingHorizontal: 17,
  },
  text_Arti: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: Warna_Putih,
    paddingHorizontal: 17,
    paddingBottom: 10,
  },
});
