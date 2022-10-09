import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {BordirKanan, BordirKiri, BordirSurah} from '../../assets';
import {Warna_Putih, Warna_Sekunder, Warna_Utama} from '../../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class HeaderSurah extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={BordirKiri}
          style={styles.bordirKiri}
          resizeMode="contain"
        />
        <Text style={styles.textKiri}>{this.props.revelation}</Text>
        <View style={styles.conterTitleArti}>
          <Image
            source={this.props.bordirSurah}
            style={styles.bordir}
            resizeMode="contain"
          />
          <Text style={styles.textArtiSurah}>{this.props.translation}</Text>
        </View>
        <View style={styles.conterAyat}>
          <Text style={styles.textKanan}>{this.props.jumlahAyat}</Text>
          <Text style={styles.textKanan}>{this.props.ayat}</Text>
        </View>
        <Image
          source={BordirKanan}
          style={styles.bordirKanan}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    backgroundColor: Warna_Utama,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bordirKiri: {
    height: 75,
    width: 35,
    position: 'absolute',
    left: 0,
  },
  textKiri: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: Warna_Putih,
    position: 'absolute',
    left: '10%',
  },

  conterTitleArti: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
  },

  bordir: {
    height: 65,
    width: wp('45%'),
  },
  textArtiSurah: {
    position: 'absolute',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Warna_Putih,
  },
  conterAyat: {
    alignItems: 'center',
    position: 'absolute',
    right: 45,
  },
  textKanan: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Warna_Putih,
  },
  bordirKanan: {
    height: 75,
    width: 35,
    position: 'absolute',
    right: 0,
  },
});
