import {StyleSheet} from 'react-native';
import {Warna_Bg, Warna_Disable, Warna_Hitam, Warna_Putih} from '../utils';

export const styles = StyleSheet.create({
  // Styles Drawer
  container: {
    flex: 1,
    backgroundColor: Warna_Putih,
  },
  conterProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  conterTextProfile: {
    marginLeft: 15,
  },
  textTitleName: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: Warna_Hitam,
  },
  textMyApp: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: Warna_Hitam,
  },
  conterMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 25,
    width: '90%',
    height: 50,
  },
  textSurah: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Warna_Hitam,
    marginLeft: 20,
  },
  garis1: {
    width: '100%',
    height: 0.5,
    backgroundColor: Warna_Disable,
    position: 'absolute',
    bottom: 130,
  },
  garis2: {
    width: '100%',
    height: 0.5,
    backgroundColor: Warna_Disable,
    position: 'absolute',
    bottom: 425,
  },
  conterLogout: {
    width: '90%',
    height: 50,
    position: 'absolute',
    bottom: 80,
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogout: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Warna_Hitam,
    marginLeft: 15,
  },
  // Styles Halaman Surah
  containerHome: {
    flex: 1,
    backgroundColor: Warna_Bg,
    paddingBottom: 50,
  },
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
  conterData: {
    paddingHorizontal: 5,
    paddingBottom: 50,
    paddingTop: 5,
  },
});
