import {Warna_Hitam, Warna_Putih} from '../utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Putih,
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
    paddingHorizontal: 10,
  },
  conterBordir: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  bordir: {
    width: 30,
    height: 30,
  },
  number: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: Warna_Hitam,
    position: 'absolute',
  },
  textArab: {
    fontSize: 24,
    fontFamily: 'Amiri-Bold',
    color: Warna_Hitam,
    textAlign: 'right',
  },
});
