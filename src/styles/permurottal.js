import {Warna_Bg, Warna_Disable, Warna_Utama} from '../utils';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Bg,
  },
  conterTitleAndImg: {
    alignItems: 'center',
    paddingHorizontal: 70,
  },
  conterTitle: {
    flexDirection: 'row',
    marginTop: '35%',
  },
  textTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: Warna_Utama,
  },
  conterGambar: {
    marginTop: 30,
    width: '100%',
    height: '50%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Warna_Bg,
    elevation: 3,
  },
  gambar: {
    width: '93%',
    height: '95%',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
  },
  containerSong: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  btnPlay: {
    marginHorizontal: 50,
  },
  garis: {
    marginTop: 20,
    width: '100%',
    height: 1,
    backgroundColor: Warna_Disable,
  },
});
