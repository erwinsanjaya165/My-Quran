import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Warna_Putih, Warna_Utama} from '../../utils';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.conterNmaSurah}>
        <Text style={styles.textNmaSurah}>{this.props.title1}</Text>
        <Text style={styles.textNmaSurah}>{this.props.title2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conterNmaSurah: {
    width: '100%',
    height: 50,
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textNmaSurah: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: Warna_Putih,
    marginLeft: 5,
  },
});
