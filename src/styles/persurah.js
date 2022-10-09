import {Warna_Abu, Warna_Hitam, Warna_Putih, Warna_Utama} from '../utils';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Putih,
  },
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
  conterLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    width: 150,
    height: 150,
  },
  conterDataAyat: {
    margin: 5,
  },
  conterBordir: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  bordir: {
    width: 35,
    height: 35,
  },
  number: {
    position: 'absolute',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Warna_Hitam,
  },
  textArab: {
    fontSize: 20,
    fontFamily: 'Amiri-Bold',
    color: Warna_Hitam,
    paddingRight: 5,
  },
  textArti: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Warna_Abu,
    marginLeft: 40,
    marginTop: 15,
  },
});
