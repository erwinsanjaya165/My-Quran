import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import {
  Warna_Disable,
  Warna_Hitam,
  Warna_Putih,
  Warna_Utama,
} from '../../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class DaftarSurah extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.conterSurah} onPress={this.props.onPress}>
        <View style={styles.conterBordir}>
          <Image source={this.props.bordir} style={styles.bordir} />
          <Text style={styles.textNumber}>{this.props.number}</Text>
        </View>
        <View style={styles.boxNamaSurah}>
          <Text style={styles.titleSurah}>{this.props.nama}</Text>
          <Text style={styles.textMakkiyyah} numberOfLines={1}>
            {this.props.revelation} {this.props.numberOfAyahs}
          </Text>
        </View>
        <Text style={styles.textArabic}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  conterSurah: {
    backgroundColor: Warna_Putih,
    borderBottomWidth: 1,
    borderColor: Warna_Disable,
    width: wp('100%'),
    height: hp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  conterBordir: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bordir: {
    width: 40,
    height: 40,
  },
  textNumber: {
    position: 'absolute',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Warna_Hitam,
  },
  boxNamaSurah: {
    marginLeft: '5%',
    flex: 1,
  },
  titleSurah: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Warna_Hitam,
  },
  textMakkiyyah: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: Warna_Utama,
  },
  textArabic: {
    fontSize: 18,
    fontFamily: 'ReemKufi-Regular',
    color: Warna_Utama,
    paddingRight: 20,
  },
});
